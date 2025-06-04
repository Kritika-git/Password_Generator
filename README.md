# Password Generator
Live Website: [https://kritika-git.github.io/Password_Generator/](https://kritika-git.github.io/Password_Generator/)

## Overview

A simple, secure password generator web app built with HTML, CSS, and JavaScript.

It generates two random passwords at once, each with a fixed length of **12 characters**, satisfying these requirements:

- Exactly 12 characters long
- At least one uppercase letter
- At least one lowercase letter
- At least one digit
- At least one special character

## Features

- Generates two strong passwords side-by-side with one button click.
- Passwords are displayed inside styled boxes that show empty dashed borders before generation.
- Clean and responsive design using flexbox and simple CSS styling.

## How It Works

When you click **Generate Passwords**, the app:

- Selects at least one character from uppercase letters, lowercase letters, digits, and special characters.
- Fills the remaining characters to make the password exactly 12 characters long.
- Shuffles the password characters to avoid predictable patterns.
- Displays the generated passwords inside the password boxes.

## Technologies Used

- HTML5
- CSS3 (flexbox for layout and dashed borders for styling)
- Vanilla JavaScript (ES6+)

