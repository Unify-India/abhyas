# Contributing to Abhyas

Thank you for considering contributing to Abhyas! We welcome contributions from everyone. By participating in this project, you agree to abide by our code of conduct.

## How to Contribute

1. **Fork the repository**: Click the "Fork" button at the top right of this page to create a copy of the repository on your GitHub account.

2. **Clone your fork**: Clone your forked repository to your local machine.
    ```sh
    git clone https://github.com/your-username/abhyas.git
    ```

3. **Create a branch**: Create a new branch for your changes.
    ```sh
    git checkout -b my-feature-branch
    ```

4. **Make your changes**: Make your changes to the codebase.

5. **Commit your changes**: Commit your changes with a descriptive commit message.
    ```sh
    git commit -m "Description of my changes"
    ```

6. **Push your changes**: Push your changes to your forked repository.
    ```sh
    git push origin my-feature-branch
    ```

7. **Create a pull request**: Open a pull request to the main repository. Provide a clear description of your changes and any related issues.

## Code Style

Please follow the coding standards and guidelines used in the project. Ensure your code is well-documented and tested.

## Reporting Issues

If you find a bug or have a feature request, please open an issue on GitHub. Provide as much detail as possible to help us understand and address the issue.

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct.

## PR creation and contribution standards
### Checks before submission
Run the checks before creating a PR or pushing your changes to git and make sure there is no error in local console or browser console 
**Scripts**

1. To run linting
   ```sh
   npm run lint
   ```
2. To format according to provided prettier configuration
   ```sh
   npm run prettier-format
   ```
3. To generate a production build run this command
   ```sh
   npm run build
   ```
4. To generate a development build run this command
   ```sh
   ionic build

### Commit Message

It's important to write descriptive and informative commit messages that explain the changes you've made.

The perfect commit message should have certain qualities:
- It should have a prefix following [Semantic Git commit messages](#semantic-git-commit-messages)
- It should be just enough, and not too detailed.
- It should be unambiguous.
- Use the imperative, present tense.

For example, a good commit message might look like this: "fix: add authorization for document access". A bad commit message would be something like "Fix bugs". Be as specific as possible and explain the reasoning behind your changes.

### Semantic Git commit messages

Please use following commit message format.

* docs (changes to documentation) -> ```git commit -m 'docs: commit-message-here'```
* feat (new feature) -> ```git commit -m 'feat: commit-message-here'```
* update (update on existing feature) -> ```git commit -m 'update: commit-message-here'```
* ui (change in UI) -> ```git commit -m 'ui: commit-message-here'```
* fix (bug fix) -> ```git commit -m 'fix: commit-message-here'```
* refactor (refactoring production code) -> ```git commit -m 'refactor: commit-message-here'```
* style (formatting, missing semi colons, etc; no code change) -> ```git commit -m 'style: commit-message-here'```



For more information on commit message guidelines refer [Writing Meaningful Commit Messages](https://reflectoring.io/meaningful-commit-messages/).

### Title in a Merge Request
When submitting a merge request, it is important to provide a clear and descriptive title that accurately summarizes the changes being made. This helps reviewers quickly understand the purpose and scope of the changes, and makes it easier to track changes over time.

Here are some tips for crafting an effective merge request title:

1. Begin the title with JIRA task or bug id. i.e. AB-3/AB-12
2. Followed by the task/bug id write a short description of changes being made. Follow the below points to write a short description on your title
   - Use imperative mood (e.g., "Add feature" instead of "Added feature").
   - Begin the description with a verb that describes the action being taken.
   - Be specific and avoid using vague or general terms..

A good merge request title may look like this
```sh
   AB-3: Setup firebase     
```
```sh
   AB-12: Fix login flow
```

A clear and descriptive merge request title is essential for maintaining a high-quality codebase and ensuring that everyone involved in the project can easily understand and follow the changes made. Please take the time to craft a thoughtful and informative title for every merge request you submit.

### Label in a Merge Request
When submitting a merge request, it is important to assign appropriate labels that accurately describe the nature of the changes being made. This helps reviewers quickly understand the type and scope of the changes, and makes it easier to track changes over time.

Our project uses a set of predefined labels to categorize merge requests based on their type and priority. When submitting a merge request, please assign the appropriate label(s) from the following list:

**Change Indicator Labels**

| Label                      | Usage                                                                                  |
| -------------------------- | -------------------------------------------------------------------------------------- |
| `bug-fixes`                | for changes that fix a bug or resolve an issue.                                        |
| `hot-fix`                  | for changes that fix a bug or resolve an issue.                                        |
| `feature-addition`         | for changes that add a new feature or functionality.                                   |
| `ui-changes`               | for changes that includes only ui enhancement but not any bug fix or feature addition. |
| `refactor`                 | for changes that update or add documentation.                                          |
| `documentation`            | for changes that fix a bug or resolve an issue.                                        |
| `performance-improvements` | for changes that improve the performance of the code.                                  |
| `feature-improvements`     | for changes that improve or enhance existing features or functionality.                |
| `maintenance`              | for changes that are related to project maintenance or housekeeping.                   |


Your merge request description should be easy to read and understand, and should clearly explain the changes being made. Please take the time to craft a thoughtful and informative description for every merge request you submit, as it helps to ensure that your changes are reviewed and integrated quickly and efficiently.


