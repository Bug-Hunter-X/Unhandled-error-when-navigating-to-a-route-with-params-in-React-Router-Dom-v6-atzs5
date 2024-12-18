# Unhandled error when navigating to a route with params in React Router Dom v6

This repository demonstrates an uncommon error in React Router Dom v6 when navigating to a route with parameters without providing the parameter value.  The issue occurs when a route with parameters is defined, but the user navigates to the parent route without specifying the parameter. This results in an unexpected error.  The solution involves using the `useParams` hook to gracefully handle missing parameters.

## Problem

The provided `bug.js` file shows a basic React app with React Router v6.  Adding a route with a parameter like `/users/:userId` works fine if you provide a userId. However, if you navigate directly to `/users` without specifying a `userId`, React Router v6 throws an error because it cannot match the route correctly. This can lead to a bad user experience and unexpected crashes, particularly in production environments.

## Solution

The `bugSolution.js` file demonstrates a solution using the `useParams` hook and optional chaining. The solution checks if the userId parameter exists before using it, avoiding the error when the parameter is missing.