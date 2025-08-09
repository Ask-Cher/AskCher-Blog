
This is the source code for the AskCher Hugo blog. The site is built with the static site generator Hugo and deployed via Vercel.

# Quick Start: Editing the Website
To make changes to the website, follow this simple workflow:

Open your terminal and navigate to the project's root folder.

Start the local development server: hugo server

Open the URL displayed in the terminal (usually http://localhost:1313/) in your web browser. The site will automatically refresh as you make changes.

Edit the files in the project to make your desired changes.

Once you're happy with the changes, stop the server by pressing Ctrl+C.

Commit and push your changes to your Git repository. Vercel will automatically detect the changes, rebuild, and deploy the updated site.

# Website Folder Structure
This is a brief overview of the most important directories and files in your Hugo project.

## Folder	Purpose
### theme/content/	
This is where you write your content. All blog posts are stored here as Markdown files (.md). 
The folder structure here dictates the URL structure of your website (e.g., content/posts/my-post.md becomes /posts/my-post/).
### theme/layouts/	
This is where your templates are. This folder contains the HTML templates that Hugo uses to render your content. You should not need to edit these unless you want to change the overall look and feel of the site.
### theme/assets/
This is for css and js assets. Any file you place here is copied directly to the final website without being processed. This is the correct place for your CSS, JavaScript, and images. 

### config.toml	
The site's main configuration file. This file contains global settings like your site's title, base URL, and other parameters.

# How to Write a Blog Post
Creating a new blog post is easy. You will only need to work within the content/ directory.

## Step 1: Create a New File

Navigate to the content/posts/ directory and create a new Markdown file (.md). The file name will determine the URL of your post, so use a clean, descriptive name (e.g., nurturing-discipline.md).

## Step 2: Add Front Matter (Post Metadata)

At the very top of your new file, you must include a block of metadata called "front matter." This is a YAML block enclosed by --- that tells Hugo everything about your post, such as its title, date, and tags.

Here is an example of the front matter you should use for a new post:

Markdown
---
title: "The Title of Your New Blog Post"
date: 2025-01-15T00:00:00+08:00
description: "A short, descriptive sentence for your new post. This is used in search results and on social media."
author: "Cheng Ren Teo"
images: [] # Optional: Add a featured image path here
categories:
  - "The Main Category"
tags:
  - tag1
  - tag2
  - tag3
Layout: AskCher-Blog
---
## Step 3: Write Your Content

Below the front matter, write the body of your blog post using standard Markdown syntax. You can use # for headings, * for italics, ** for bold, and other standard Markdown features.

### Key Takeaway/Highlight Sections

To create the styled "highlight box" or "key insight" sections, use Markdown's blockquote syntax.

To create a "highlight" box, use a simple blockquote:

" > ** Highlight Title ** "
" > This is the content of your highlight box. Remove the inverted commas and whitespaces"

Markdown
> **Highlight Title**
> This is the content of your highlight box.
To create a "key insight" box with an icon, you can use a similar blockquote and customize it with a class if needed (which your templates are set up to handle). A simple blockquote will work perfectly for your current styling.

Creating the Post Summary

The homepage and other list pages will show a summary of your post. To manually control where this summary ends, insert the `` separator in your Markdown file. Everything above this line will be the summary.

Example:

Markdown
This is the first paragraph of the post, which will be the summary.

This is the second paragraph, also part of the summary.

This is the rest of the content of your blog post. It will only be visible when someone clicks to read the full article.

## Step 4: Save and Deploy

Save your new file. The hugo server will automatically rebuild and refresh your site. Once you are happy with the post, simply git add, git commit, and git push to deploy it.