# Board

A small task board built with HTML, CSS and vanilla JavaScript. Tasks are displayed as cards, and you can add, search and delete them.

## Files

- index.html : page structure (form, search input, cards container)
- style.css : styles
- js.js : application logic

The three files must be in the same folder.

## Run

No installation needed. Open index.html in a browser.

## Features

- Display all tasks as cards (title, owner, position)
- Add a task using the form
- Delete a task with the "supprimer" button
- Search tasks by title (case-insensitive)
- The task title select is filled from the tasks currently displayed

## Task structure

Each task is an object in the `tasks` array:

```javascript
{ id: 1, title: "Create homepage", position: "left", owner: "Ahmed" }
```

- id : unique number, new tasks use `NextId` (starts at 11)
- title : task title
- position : "left" or "right"
- owner : name of the person in charge

## Form

| Field | Type | Rule |
|-------|------|------|
| Owner | text input | required, cannot be empty |
| Position | text input | must be exactly "left" or "right" (lowercase, no extra spaces) |
| Task title | select | no validation, takes the selected title |

If Owner or Position is invalid, an error message is shown under the field and the task is not added.

## Functions (js.js)

- `afficher(arr = tasks)` : clears the cards container and the select, renders the given array of tasks as cards, and adds one option per task title to the select
- `readForm()` : reads the form values and returns them as an object
- `addTask(data)` : creates a task from the form data, adds it to `tasks`, then calls `afficher()`
- `searchtask(text)` : filters `tasks` by title and renders the result with `afficher`

## Behavior notes

- Deleting a task re-renders the list and keeps the current search filter applied.
- Adding a task re-renders the full list, even if there is still text in the search input.
- The select is rebuilt by `afficher`, so while a search filter is active it only contains the titles of the displayed tasks.
- A new task takes its title from the select, so it reuses the title of an existing task.

## Limitations

- Data is stored in memory only. Refreshing the page resets the tasks to the initial list.
- It is not possible to write a brand new title from the form (the title field is a select).
- If no task is displayed (everything deleted, or a search with no result), the select is empty and a task can be added with an empty title.
- Position is case-sensitive: "Left" is rejected.
- Deleting a task has no confirmation.
