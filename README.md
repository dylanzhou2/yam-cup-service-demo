# YAM bimanual cup service

Interactive 3D simulation demonstrations for Levels 1–5. Open the GitHub Pages site to orbit, zoom, scrub, and play the recorded rollouts. Level 4 compares 0°, 180°, and 286.4° nozzle starts.

## Evidence and scope

- Level 1: full kinematic sequence, idealized grasps.
- Level 2: recorded two-cup dry contact-physics service, using exact simulated object feedback.
- Level 3: current-model motor-feedback height probe only; full service is not validated.
- Level 4: contact-physics homing and pouring followed by collision-checked serving with an idealized grasp.

- Level 5: experimental two-panel sweep without a ring. Ten initial positions reached within 10 mm (worst 6.6 mm). Rigid compound stack and prescribed panel motion; IK arm replay has sampled penetration checks. Starts with tools already held. Tool grasp/docking, individual cup slip, and full service are not validated.

Water is a scalar visualization. These recordings do not validate hardware or liquid dynamics. Provenance is in `data/manifest.json`.

## Local preview

Run `python3 -m http.server 8000` in this directory and open http://localhost:8000/. No build step is required. GitHub Pages serves this directory from the main branch.

Three.js and OrbitControls are distributed under the license in `vendor/LICENSE.three`.
