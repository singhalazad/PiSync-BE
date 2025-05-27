# PiSync Backend API

RESTful API for the PiSync dashboard to manage device synchronization.

## Setup

```bash
npm install
npm start


# Features

Device management with sync status monitoring
Manual sync triggering
Error log viewing
Real-time status updates

# API Endpoints

GET /api/devices - Get all devices with sync status
POST /api/devices/:id/sync - Trigger manual sync
GET /api/errors - Get recent error logs