# Who's That Pokemon Frontend

React front end built for the Aegon technical assessment.

## Overview
The front end has three routes:
- Home Page: Landing page that will allow a user to either start a new game, or continue an existing one if stored.
- Play: This is where the user will play the game, and be presented with a silhouette of a pokemon and 4 choices, one of which is correct, once they have gussed, they will see if they were correct before moving onto the next round. There are 8 rounds in total, and a user scores 10 points for each correct answer.
- Any other route will show a page detailing the route has not been found, and the option to return to the Home Page.

The game state is stored currently in session storage. This means that if a user exits the game/refreshes the page for any reason, it will still be the same. I would like to improve this in future by including it in Redis. If a user refreshes the page or revisits the game when they have an existing session, it should return the current round using the state, and not make a call to the API.

For UI, I utilised MaterialUI to try and create a polished/responsive design.

## Running the application
To start the application you will need to run
```
npm install
npm run start
```
This will start the application on port 3000. You will then be able to view this on your browser via http://localhost:3000.

NOTE: You will need to be running the backend application as well for this to work, instructions on how to do this can be found [here](https://github.com/niallmactaggart94/pokemon_api/blob/main/README.md)

## CI/CD 
Github Actions workflow for assurance testing has been added and successfully runs.

## Testing
The following commands can be run to test the application. Unit tests are run in Jest, and the code styling is done using ESLint.
```
Code stying - npm run lint
Unit testing - npm run test
```

## Accessibility
I have tested the accessibility of the application using AXE Chrome Extension. The game is also mobile friendly.

## Potential Improvements
If I had more time I would look to fix/improve the following:

- **Add Login/Register functionality** - Route to handle all logins which would give the user a Cognito session / JWT which would improve how to handle session storage

- **Better game mechanics** - The game itself could be improved on a number of different levels, including: Difficulty levels, Hints, different generations (would require an update to backend API) & tracking users high score.

- **Testing** - I would like to add in a lot more testing for the frontend as it is very sparse.  
  
