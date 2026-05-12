# WebRTC CCTV Viewer

WebRTC-based CCTV system using **Firebase Realtime Database** as the signaling server.

## How it works

- **camera.html** — Opens on a phone/laptop camera. Broadcasts video via WebRTC.
- **index.html** — Viewer dashboard. Lists all online cameras. Click to watch.

Firebase RTDB replaces the traditional Node.js + Socket.io signaling server. SDP offers/answers and ICE candidates are exchanged via the database.

## Usage

1. Open `camera.html` on the broadcasting device, enter a name, click **Start Broadcast**
2. Open `index.html` on the viewing device
3. Click **Connect to Stream** on any online camera

## Architecture

```
Camera → Firebase RTDB (offer, candidates) → Viewer
      ↕ P2P video stream (WebRTC) ↕
```
