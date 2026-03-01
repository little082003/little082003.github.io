# Lesson Learned: Universal 3D Model Auto-Scaling & Auto-Centering in Three.js

**Date**: 2026-03-01
**Topic**: 3D Graphics / Three.js

**Lesson**:
When allowing arbitrary or varied `.glb`/`.gltf` model imports into a uniform 3D scene (especially when models originate from different software like Blender, Maya, or VRoid), you **cannot rely on a hardcoded scale multiplier**. A model might be scaled in centimeters, millimeters, or meters natively.

If a model appears "invisible" but loads successfully in the Network tab, it is almost always due to **extreme scaling** (too tiny or gigantic enough to engulf the camera) or **off-center coordinates**.

**Solution (The Normalization Pipeline)**:
Using `THREE.Box3`, we can mathematically measure the model and normalize it so that its largest dimension matches a target size, and its bounding box's lowest Y value rests flat on the ground origin.

```javascript
// 1. Calculate the bounding box of the cloned scene
const box = new THREE.Box3().setFromObject(clonedScene);
const size = new THREE.Vector3(); box.getSize(size);
const center = new THREE.Vector3(); box.getCenter(center);

// 2. Find the largest dimension (X, Y, or Z) to base the scale factor on
const maxDim = Math.max(size.x, size.y, size.z);

let autoScale = 1.0;
if (maxDim > 0 && maxDim !== Infinity && !isNaN(maxDim)) {
    // 3. Set a target height/width (e.g., 3 units) and calculate the necessary scale
    const targetSize = 3.0;
    autoScale = targetSize / maxDim;
    
    // 4. Center the meshes around (0,0,0) and ensure the bottom touches Y=0
    clonedScene.position.set(-center.x, -box.min.y, -center.z);
}

// 5. Wrap it in a parent Group to apply the scale and final scene positioning
const modelGroup = new THREE.Group();
modelGroup.add(clonedScene);
modelGroup.scale.set(autoScale, autoScale, autoScale);
modelGroup.position.set(0, 0, 0); // Put it down wherever the character should spawn
```

By applying this to all incoming assets via `GLTFLoader`, any model regardless of its original export unit will fit perfectly within the camera viewport.
