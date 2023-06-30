## Git

## Github

### Version Control

### Commands:

- clone->(from hosting to local machine)
- add->(track Files and changes)
- commit->(Save in git)
- push->(Upload to gitHub)
- pull-> (Download changes from remote repo)

#### To add Project First Time:

```sh
git init
git add .
git commit -m "initial commit" -m "description"
git remote add origin https://github.com/YOUR-ID/YOUR-REPOSITORY
git branch -M main
git push -u origin main
git push origin main(recomended)
(-u to make it default)
```

#### To bring back the data same to the last commit :

```sh
git checkout -f

OR

git checkout <"file names">
```

#### To see all the commits:

```sh
git log
git log -p -1
```

#### To get the status of git:

```sh
git status
```

#### To Remove A file from staging area (if added by mistake):

```sh
git rm --cached <"file name">
```

# Branching

- #### To create a new branch:

```sh
git branch dev1
```

- #### Moving to other branch:

```sh
git checkout dev1
```

- #### alternate way:

```sh
git checkout -b dev1
```

- #### To merge branch with the main brasnch:

```sh
git merge dev1
```

- #### To delete the Branch:

```sh
git branch -d dev1
```

- #### To push into the new branch:

```sh
git push -u origin dev1

git push origin dev1(Recomended)
```

## CLONE:

```sh
git clone <"url of git repo">
```

#### To remove existing git data

```sh
rmdir -Force -Recurse .git
```
