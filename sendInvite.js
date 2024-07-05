const nodemailer = require('nodemailer');
require('dotenv').config();

// Email configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// iCalendar content
const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//TEST ORGNISATION//TEST Product//EN
METHOD:REQUEST
BEGIN:VEVENT
UID:123456
DTSTAMP:20210701T120000Z
DTSTART:20210701T120000Z
DTEND:20210701T130000Z
SUMMARY:Sample Meeting
DESCRIPTION:This is a sample meeting invitation.
LOCATION:Online
URL:https://meet.google.com/duv-pgti-bat
END:VEVENT
END:VCALENDAR`;

// Email options
const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: 'Meeting Invitation',
    text: 'Please find the meeting details attached.',
    icalEvent: {
        filename: 'invite.ics',
        method: 'request',
        content: icsContent
    }
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Email sent: ' + info.response);
});
