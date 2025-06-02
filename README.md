## Table of Contents

- [UX](#ux)
- [User Stories](#user-stories)
- [Development Cycle](#development-cycle)
- [Wireframes](#wireframes)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Content Credits](#content-credits)
- [Media](#media)
- [Testing](#testing)
- [Deployment](#deployment)
- [Acknowledgements](#acknowledgements)


# Memory Game

**Memory Game** is a fun and interactive browser-based card matching game. Designed to strengthen memory muscles and improve focus, it offers a quick and engaging mental workout suitable for all ages. The gameplay is easy and straightforward—just flip cards to find matching pairs. To add a competitive edge, the game shows your completion time, allowing you to challenge yourself to beat your best score with every round.

[View the live site here.](https://hannamussa.github.io/memorygame/)

## UX

### Target Audience

This game is perfect for all ages—whether you're a child building cognitive skills, a student sharpening your memory, an adult in need of a mindful break, or an older adult keeping your mind active. With its simple mechanics and playful design, Memory Game offers a fun and stimulating way to stay mentally engaged. Just flip the cards, find the matching pairs, and track your progress with the time feature displayed- it is a great chance to challenge yourself.

### How to play

Flip two cards at a time to find matching pairs. When all pairs are matched, the game ends and your total time is displayed. The goal isn’t just to finish — it’s to **finish faster than your previous attempt**. Challenge yourself to beat your compete with yourself and strengthen your memory.

This memory game is easy to use, works smoothly on any device, and is perfect for everyone—whether you’re a student, a child, or someone looking to keep your mind sharp as you get older.

### Game Flow

1. **Page Load**: The game starts with all cards hidden, displaying question marks.
2. **Flipping**: Click on a card to reveal its hidden icon.
3. **Matching Logic**:
   - If two revealed cards match, they stay face-up and are marked as matched.
   - If they don’t match, they flip back after a brief delay (1 second).
4. **Winning**: Once all pairs are matched, a win message is shown with your total time.

### Color Scheme

The Memory Game uses a calm and clear palette to enhance gameplay:

* **Background:** A soft blue colour (#d6dfeb).
* **Cards:** Medium blue (#7691d1) which switches to light green (#d1ffd6) and has bright green borders (#81c784) when matched.
* **Restart Button:** Dark green (#408742) with a lighter green color when hovered (#7cba7f).
* **Text:** Dark gray (#333) for readability and contrast.
* **Instructions Panel:** Warm beige (#f2e9d5) background to contrast the background of the game.
* **Message Area:** Dark orange (#c56e12) to show success.

### Typography

**Montserrat** was selected as the primary font for both headings and body text in the Memory Game.

A **sans-serif** fallback is provided in cases where the primary font fails to load.

Montserrat was chosen for its modern look and easy readability. Consistency has been maintained with the use of one font throughout to help create a simple, clutter-free design.

## User Stories

- **As a casual player**, I want to flip cards and match pairs so that I can enjoy a simple, fun game during my free time.

- **As a returning user** I would like to have controls to easily control navigate the game.

- **As a returning user**, I want to see my completion time at the end of each game so that I can track my progress and try to beat my personal best in future rounds.

- **As a first-time user**, I want the game instructions to be clear and visible so that I can start playing without confusion.

- **As a mobile user**, I want the game to work smoothly on my phone or tablet so that I can play on any platform.

## Development Cycle


<details>
<summary>Click here to view the development cycle </summary>


| User Story Target         | Issue Acceptance Criteria and Tasks                                                                 | In Progress                                                                 | Done                                                                     |
|--------------------------|------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| Instructions             | ![Instructions Detail](assets/images/documentation/development/inst-detail.png)                    | ![Instructions In Progress](assets/images/documentation/development/inst-prog.png)  | ![Instructions Done](assets/images/documentation/development/inst-done.png)       |
| Responsive Design        | ![Responsive Detail](assets/images/documentation/development/responsive-detail.png)                | ![Responsive In Progress](assets/images/documentation/development/responsive-prog.png) | ![Responsive Done](assets/images/documentation/development/responsive-done.png)   |
| Timer                    | ![Timer Detail](assets/images/documentation/development/timer-detail.png)                          | ![Timer In Progress](assets/images/documentation/development/timer-prog.png)         | ![Timer Done](assets/images/documentation/development/timer-done.png)             |
| Buttons and Accessibility| ![Buttons Detail](assets/images/documentation/development/button-detail.png)                       | ![Buttons In Progress](assets/images/documentation/development/buttons-prog.png)      | ![Buttons Done](assets/images/documentation/development/buttons-done.png)          |
| Interactive fun game     | ![Interactive Detail](assets/images/documentation/development/interactive-detail.png)              | ![Interactive In Progress](assets/images/documentation/development/interactive-prog.png)| ![Interactive Done](assets/images/documentation/development/interactive-done.png) |
</details>

## Wireframes

Wireframes were developed usng Balsamiq for mobile, tablet and desktop sizes.

### Mobile Wireframes

<details>
<summary>Click here to view the Mobile Wireframes</summary>

![screenshot](assets/images/documentation/wireframes/mobile-wireframe.png)

</details>

### Tablet Wireframes

<details>
<summary>Click here to view the Tablet Wireframes</summary>

![screenshot](assets/images/documentation/wireframes/tablet-wireframe.png)

</details>

### Desktop Wireframes

<details>
<summary>Click here to view the Desktop Wireframes</summary>

![screenshot](assets/images/documentation/wireframes/desktop-wireframe.png)

</details>

## Features

### Existing Features
<details>
<summary>Click here to view the Existing Features </summary>


|  Feature             | Description                                                                                                          |  Screenshot |
|------------------------|--------------------------------------------------------------------------------------------------------------------------|----------------|
| **Game Board** | A 12-card layout (6 matching pairs) where each card flips on click to reveal a hidden icon.     | ![Game Board](assets/images/documentation/features/grid-features.png) |
| **Live Timer**            | Automatically starts counting when the game begins, showing how long it takes the player to match all pairs.            | ![Timer](assets/images/documentation/features/timer-button-features.png) |
| **Restart Button**        | This button resets the game by shuffling the cards, clearing matches, and resetting the timer. | ![Restart](assets/images/documentation/features/timer-button-features.png) |
| **Win Message Display**   | When all pairs are matched, a win message appears showing how long it took to complete the game.              | ![Win Message](assets/images/documentation/features/message-feature.png) |
| **Responsive Design**     | The layout is responsive on different screen sizes.         | ![Responsive](assets/images/documentation/features/responsive-feature.png) |
| **Clear Instructions**    | An instructions section explaining how to play the game.                      | ![Instructions](assets/images/documentation/features/instructions-feature.png) |
</details>

### Future Features
<details>
<summary>Click here to view the Future Features </summary>

There are several features that can be implemented in the future.

- **Sound Effects**  
  Add sound effects for card flips, matches, mismatches to increase interactivity.

- **Score System**  
  Implement a score system to track best times or fewest moves for competition.

- **Theme Customization**  
  Allow users to choose between different icons or card themes.

- **Challenge Mode**  
  Introduce timed modes where players must match all pairs before the clock runs out. 
</details>

## Technologies Used

This section highlights the tools, languages, and frameworks used in the development of the project:

- **[HTML](https://en.wikipedia.org/wiki/HTML)** – For structuring the content of the web pages.
- **[CSS](https://en.wikipedia.org/wiki/CSS)** – For styling the appearance of the site.
- **[JavaScript](https://en.wikipedia.org/wiki/JavaScript)** – For implementing interactivity and game logic.
- **[Visual Studio Code](https://code.visualstudio.com/)** – Code editor used to build and manage the project.
- **[Git](https://git-scm.com/)** – Version control tool used to track changes in the project.
- **[GitHub](https://github.com/)** – Hosting platform used to store and deploy the project repository.
- **[Google Chrome DevTools](https://developer.chrome.com/docs/devtools/)** – Used for debugging, inspecting elements, and testing media queries.
- **[Google Fonts](https://fonts.google.com/)** – Used to import custom fonts into the project.
- **[FontAwesome](https://fontawesome.com/)** – Used for visual icons throughout the game interface.
- **[Favicon.io](https://favicon.io/)** – Used to create and implement the favicon and logo.

## Content Credits

| Source                                                                                                      |      Location       | Notes                                                                            |
| ----------------------------------------------------------------------------------------------------------- | :-----------------: | -------------------------------------------------------------------------------- |
| [Markdown Builder](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)                        |   README.md file    | Assisted in understanding Markdown language.                                     |
| [Code Institute Readme Template](https://github.com/Code-Institute-Solutions/readme-template)               |   README.md file    | Helped with structuring the README layout and content.                           |
| [Code Institute Love Maths Tutorial](https://github.com/Code-Institute-Solutions/love-maths-2.0-sourcecode) | Entire website file | Provided guidance on layout and JavaScript implementation for the game.          |
| [Google Fonts](https://fonts.google.com/)                                                                   |   Entire website    | Fonts used throughout the site.                                                  |
| [W3Schools](https://www.w3schools.com/webdev/wd_javascript.asp)                                             |   Entire website    | Helped with understanding JavaScript syntax, loops, and conditions.              |
| [FontAwesome](https://fontawesome.com/)                                                                     |   Icons on cards    | Used for icons on the game cards.                                                |
| [Favicon.io](https://favicon.io/)                                                                           |       Website       | Used to generate the favicon and logo displayed in the header and browser tab.   |
| [JavaScript Game Tutorial](https://www.youtube.com/watch?v=xWdkt6KSirw)                                     |   Entire project    | Guided understanding of JavaScript and game logic implementation in script.js. |
| [JavaScript Memory Game Guide](https://www.youtube.com/watch?v=QJWnbJ39nP4)                                 |   Entire project    | Provided ideas and support for writing game logic in script.js.                |
| [Minesweeper Project by dougyb83](https://github.com/dougyb83/minesweeper)                                  |   README.md file    | Used for inspiration on README structure and general product presentation.       |

## Media

This section includes media assets that enhance the visual and interactive aspects of the website:

| Source                                                                      |    Location    | Notes                                                                              |
| --------------------------------------------------------------------------- | :------------: | ---------------------------------------------------------------------------------- |
| [FontAwesome](https://fontawesome.com/)                                     | Icons on cards | Used for visual icons representing the game tiles.                                 |
| [Favicon.io](https://favicon.io/)                                           | Website header | Used to create the favicon/logo displayed in the navbar and browser tab.           |
| [JavaScript Game Tutorial](https://www.youtube.com/watch?v=xWdkt6KSirw)     | Entire project | Source of inspiration for styling and interactive features in the game.            |
| [JavaScript Memory Game Guide](https://www.youtube.com/watch?v=QJWnbJ39nP4) | Entire project | Assisted in shaping the visual layout and logic flow of the memory game interface. |

## Testing

To view the testing carried out, please refer to the [TESTING.md](TESTING.md) file.

## Deployment

To deploy the **Memory Game** using GitHub Pages:

1. Log in to GitHub.  
2. Search for and select the **[memorygame](https://hannamussa.github.io/memorygame/)** repository.  
3. Navigate to the **Settings** tab.  
4. In the left sidebar, go to **Pages** under the **Code and automation** section.  
5. Under the **Build and deployment** section, locate the **Branch** dropdown.  
6. Select **main** as the branch.  
7. Click **Save** to apply the changes.

[View the live site here](https://hannamussa.github.io/memorygame/)

### Local Deployment

To make a local copy on your own system, you can clone or fork this project.

#### Cloning

You can clone the repository by following these steps:

1. Log in to GitHub and navigate to the **[memorygame](https://hannamussa.github.io/memorygame/)** repository.  
2. Click the **Code** button (green dropdown).  
3. Copy the repository URL (using HTTPS, SSH, or GitHub CLI).  
4. Open your preferred code editor and navigate to the terminal tab.  
5.Type the following to clone the repository:  `git clone https://github.com/hannamussa/memorygame.git`
6. Press Enter to create your local clone.

#### Forking
Forking a repository allows you to create a personal copy of a project.

1. Log in to GitHub and navigate to the **[memorygame](https://hannamussa.github.io/memorygame/)** repository.  
2. Click **Fork**, then select **Create a new fork**.  
3. Enter a name for your forked repository.  
4. Click **Create fork**.  
5. The forked repository will now appear in your GitHub account.

### Acknowledgements

- I am grateful to my tutor, Robert Thompson, and my mentor, Richard Wells, for their continued support and guidance during this project.