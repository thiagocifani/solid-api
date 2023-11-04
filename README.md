# App

Gympass style app.

## Functional Requirements

- [ ] Register an User
- [ ] Authentication
- [ ] Load a profile for a given logged user
- [ ] Fetch the number of checkins made by the logged user
- [ ] List Checkin's History
- [ ] Search for nearby gyms
- [ ] Search gyms by name
- [ ] Logged user should be able to checkin at a given gym
- [ ] Validate checkin for a given user
- [ ] Register an gym

## Business Requirements

- [ ] Can't register with a duplicate email
- [ ] Can't checkin more than once per day
- [ ] Checkin only in a radius of 100m from the gym
- [ ] Checkin should be validated up to 20 minutes after created
- [ ] Checkin should only be validate by an admin
- [ ] Only admin should register a gym

## Requisitos não funcionais

- [ ] Password should be encrypted
- [ ] Postgres as database
- [ ] Lists should be paginated with 20 items per page
- [ ] JWT for web token authentication