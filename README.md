# Google Meet Invitation Script

This Node.js script automatically generates a Google Meet link and sends an email invitation with the meeting details and link.

## Prerequisites

1. Node.js and npm installed on your machine.
2. A Gmail account with 2-Step Verification enabled.
3. Google Calendar API enabled in your Google Cloud project.
4. OAuth 2.0 credentials (downloaded as `credentials.json`).

## Setup

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-repo/google-meet-invite.git
cd google-meet-invite
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Set Up Environment Variables
1. Create a .env file in the project root and add your email credentials:
    
```bash
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_TO=recipient-email@gmail.com
```

2. Enable 2-Step Verification and Generate an App Password
    2.1 Enable 2-Step Verification:

    a. Go to your Google Account Security settings.
    b. Under "Signing in to Google," find "2-Step Verification" and click "Get Started."
    c. Follow the prompts to set up 2-Step Verification.

    2.2 Generate an App Password:

    After enabling 2-Step Verification, go back to the Google Account Security settings.
    a. Under "Signing in to Google," find "App passwords" and click on it.
    b. Select "Mail" as the app and your device type (e.g., "Windows Computer") and click "Generate."
    c. Google will provide you with a 16-character password.

### Step 4: Add OAuth 2.0 Credentials
Place the credentials.json file (downloaded from the Google Cloud Console) in the project root.

### Step 5: Run the Script

```bash
node sendInvite.js
```
