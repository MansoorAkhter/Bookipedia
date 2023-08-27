# Algoace Book Store App

Welcome to **Algoace Book Store App**! This app is designed to showcase various features and best practices in React Native development. Below, you'll find a summary of the key features and technologies used in this app.

## Features

### 1. Favorites using Redux and Redux Persist

- The app utilizes **Redux** for state management.
- **Redux Persist** is employed to maintain the favorite books in local storage even after app restarts.
- **Async Storage** is used as the storage engine for Redux Persist.

### 2. API Requests and Error Handling with Axios

- **Axios** is the chosen library for handling API requests.
- Comprehensive **error handling** mechanisms are in place to gracefully manage API request failures.

### 3. Book Filter with Debounce

- A **book filter** functionality is implemented, allowing users to search and filter books.
- **Debounce** technique is applied to prevent excessive API requests while typing in the search input.

### 4. Network Connectivity with NetInfo

- **NetInfo** is utilized to monitor network connectivity.
- When the network is unavailable, a UI indicator is displayed to inform users about the lack of connectivity.

### 5. Lazy Loading and Refresh Control for Book Rendering

- **Lazy loading** technique is employed to efficiently render a large list of books using a FlatList.
- A **refresh control** mechanism allows users to pull down and refresh the book list.

### 6. React Native Navigation and Code Structure

- The app uses **React Native Navigation** to manage navigation between screens.
- A **well-structured and common navigation structure** is followed, enhancing code readability and cleanliness.
- The **DRY (Don't Repeat Yourself)** principle is strictly adhered to, minimizing code duplication and ensuring efficient maintenance.

### 7. Using React Memo for Performance

- **React memo** is employed to optimize the rendering performance of the book component.
- Memoization ensures that the book component is re-rendered only when its props change.

### 8. Folder Structure (Atoms, Molecules, Organisms)

The project follows the **atoms, molecules, organisms** folder structure template:

- **src**
  - **components**
    - **atoms** (Basic UI components)
    - **molecules** (Combinations of atoms)
    - **organisms** (Larger, more complex components)
    - **templates** (Larger, combinations of molecules and functions)
  - **screens** (Top-level screens of the app)
  - **redux** (Redux-related files)
  - **utils** (Utility functions)
  - **navigation** (Navigation Service, Structure)
  - **api** (API, Data fetching and return it)
  - **assets** (Images, fonts, etc.)

### 9. Custom SVG Circular Progress Components

- Create **custom SVG circular progress components** with animation.
- **Full circular progress** and **half full circular progress** are supported.
- The progress value can be entered, and the result is visually displayed.

### 10. External Linking

- **Deep linking** is used to enable users to visit external links from within the app.
_ For visiting click on `View Details` button in book detail screen.

### 11. Responsive UI Design

- The app features a **responsive UI** that adapts to various screen sizes and orientations.
- **Flexbox** and other responsive design principles are used to create a consistent and visually appealing user interface.


## Getting Started

Follow these steps to run the app locally:

1. Clone this repository to your local machine.
2. Run `npm install` or `yarn install` to install dependencies.
3. Ensure you have a working development environment for React Native.
4. Run the app using `npm start` then type `a` for Android and `i` for iOS.

## Contributing

Feel free to contribute to this project by opening issues or pull requests. Your feedback and contributions are highly appreciated!


**Algoace Book Store App** - Created by [Mansoor Akhter]# Bookipedia
# Bookipedia
