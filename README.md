# Description  

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/1c16b8372e434e54b5f8e3da24f59e09)](https://app.codacy.com/app/AldoGatica123/edent-react?utm_source=github.com&utm_medium=referral&utm_content=AldoGatica123/edent-react&utm_campaign=Badge_Grade_Dashboard)
[![Build Status](https://travis-ci.com/AldoGatica123/edent-react.svg?branch=master)](https://travis-ci.com/AldoGatica123/edent-react)

React web application for patient management using Material-UI library.


## Quickstart
Run locally using:
```bash
npm install
npm start
```

#### Routes  
| Path           | Component   | Description                                   |
|----------------|-------------|-----------------------------------------------|
| /              | Dashboard   | Dashboard showing multiple KPIs and charts    |
| /today         | Today       | Display reminders of todays work              |
| /patients      | Patients    | List of patients medical info for each clinic |
| /exams         | Exams       | List of patients exams for each clinic        |
| /contacts      | Contacts    | List of contacts                              |
| /createpatient | PatientForm | Form to fill new patients information         |
| /user          | User        | Display logged in users information           |
| /login         | Login       | Login page                                    |
| /logout        | Logout      | Display log out confirmation                  |

## Deployment
This app is being deployed for QA using Github Pages by Travis-CI into the following link:  
https://aldogatica123.github.io/edent-react/

## Environment Variables
```text
GITHUB_TOKEN=[secure]
```

