// 示例笔记数据（在实际使用时，可以通过fetch加载notes文件夹中的文件）
const sampleNotes = [
    {
        id: 'note1',
        title: 'Vue.js基础笔记',
        content: '# Vue.js基础笔记\n\n## 什么是Vue.js\n\nVue (发音为 /vjuː/，类似 **view**) 是一款用于构建用户界面的JavaScript框架。它基于标准HTML、CSS和JavaScript构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面，无论是简单还是复杂的界面。\n\n## Vue.js的核心特性\n\n### 响应式数据绑定\n\n当数据发生变化时，视图会自动更新，这使得状态管理变得简单直观。\n\n```javascript\nconst app = Vue.createApp({\n  data() {\n    return {\n      message: 'Hello Vue!'\n    }\n  }\n})\n```\n\n### 组件系统\n\n组件系统允许我们使用小型、独立和通常可复用的组件构建大型应用。\n\n### 虚拟DOM\n\nVue使用虚拟DOM来提高渲染性能。\n\n## 开始使用Vue.js\n\n### 安装\n\n```bash\nnpm install vue@next\n```\n\n### 创建一个简单的Vue应用\n\n```javascript\nimport { createApp } from 'vue'\n\nconst app = createApp({\n  data() {\n    return {\n      count: 0\n    }\n  },\n  methods: {\n    increment() {\n      this.count++\n    }\n  }\n})\n\napp.mount('#app')\n```\n\n在HTML中：\n\n```html\n<div id="app">\n  <button @click="increment">count is: {{ count }}</button>\n</div>\n```\n\n## 生命周期钩子\n\nVue实例有一系列的生命周期钩子，允许我们在组件不同的阶段执行代码：\n\n- **created**: 实例创建完成后调用\n- **mounted**: 实例挂载到DOM后调用\n- **updated**: 数据更新导致DOM更新后调用\n- **unmounted**: 实例被卸载后调用\n\n## 总结\n\nVue.js是一个渐进式JavaScript框架，它易于上手，同时也能胜任复杂的单页应用开发。通过学习Vue.js的核心概念，我们可以更高效地构建现代Web应用。'
    },
    {
        id: 'note2',
        title: 'React学习笔记',
        content: '# React学习笔记\n\n## React是什么\n\nReact 是一个用于构建用户界面的 JavaScript 库。React 起源于 Facebook 的内部项目，该公司对市场上所有 JavaScript MVC 框架都不满意，就决定自己写一套，用来架设 Instagram（照片交友）的网站。\n\n## React的核心概念\n\n### 组件\n\nReact 组件让你将 UI 拆分为独立可复用的代码片段，并对每个片段进行独立构思。\n\n```jsx\nfunction Welcome(props) {\n  return <h1>Hello, {props.name}</h1>;\n}\n```\n\n### JSX\n\nJSX 是 JavaScript 的语法扩展。你可以在 JSX 中嵌入表达式。\n\n```jsx\nconst name = 'Josh Perez';\nconst element = <h1>Hello, {name}</h1>;\n```\n\n### Props\n\nProps 是只读的，组件绝不能修改自身的 props。\n\n### State\n\nState 类似于 props，但它是私有的，并且完全受控于当前组件。\n\n```jsx\nclass Counter extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {count: 0};\n  }\n  render() {\n    return (\n      <div>\n        <p>You clicked {this.state.count} times</p>\n        <button onClick={() => this.setState({count: this.state.count + 1})}>\n          Click me\n        </button>\n      </div>\n    );\n  }\n}\n```\n\n## React Hooks\n\nHooks 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。\n\n```jsx\nimport React, { useState } from 'react';\n\nfunction Example() {\n  // 声明一个新的 state 变量，我们将其称为 "count"\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>\n        Click me\n      </button>\n    </div>\n  );\n}\n```\n\n## 总结\n\nReact 是一个强大的库，用于构建用户界面。通过组件化、JSX、Props 和 State 等核心概念，我们可以构建出复杂而高效的前端应用。'
    },
    {
        id: 'note3',
        title: 'Git常用命令笔记',
        content: '# Git常用命令笔记\n\n## 基础命令\n\n### 初始化仓库\n\n```bash\ngit init  # 初始化新的Git仓库\ngit clone <url>  # 克隆远程仓库\n```\n\n### 基本操作\n\n```bash\ngit add <file>  # 添加文件到暂存区\ngit add .  # 添加所有修改的文件到暂存区\ngit commit -m "提交信息"  # 提交暂存区的更改\ngit status  # 查看仓库状态\ngit diff  # 查看未暂存的修改\ngit diff --staged  # 查看已暂存的修改\n```\n\n## 分支管理\n\n```bash\ngit branch  # 列出所有分支\ngit branch <branch-name>  # 创建新分支\ngit checkout <branch-name>  # 切换分支\ngit checkout -b <branch-name>  # 创建并切换到新分支\ngit merge <branch-name>  # 合并指定分支到当前分支\ngit branch -d <branch-name>  # 删除分支\n```\n\n## 远程仓库操作\n\n```bash\ngit remote add origin <url>  # 添加远程仓库\ngit push -u origin <branch>  # 推送分支到远程仓库\ngit pull  # 拉取远程仓库的更改\ngit fetch  # 获取远程仓库的更新\ngit remote -v  # 查看远程仓库信息\n```\n\n## 撤销操作\n\n```bash\ngit revert <commit-hash>  # 撤销指定提交\ngit reset --soft <commit-hash>  # 重置到指定提交，但保留更改\ngit reset --hard <commit-hash>  # 重置到指定提交，丢弃所有更改\ngit checkout -- <file>  # 撤销对文件的修改\n```\n\n## 查看历史\n\n```bash\ngit log  # 查看提交历史\ngit log --oneline  # 查看简洁的提交历史\ngit log --graph  # 查看图形化的提交历史\ngit log --author="作者名"  # 查看指定作者的提交历史\n```\n\n## 总结\n\nGit是一个强大的版本控制系统，掌握这些常用命令可以帮助我们更高效地进行代码管理和团队协作。'
    }
];

// DOM元素引用
const notesListElement = document.getElementById('notes-list');
const noteContentElement = document.getElementById('note-content');
const searchInputElement = document.getElementById('search-input');

// 初始化页面
function init() {
    renderNotesList(sampleNotes);
    
    // 为搜索框添加事件监听器
    searchInputElement.addEventListener('input', handleSearch);
}

// 渲染笔记列表
function renderNotesList(notes) {
    notesListElement.innerHTML = '';
    
    if (notes.length === 0) {
        const emptyItem = document.createElement('li');
        emptyItem.innerHTML = '<p>没有找到匹配的笔记</p>';
        notesListElement.appendChild(emptyItem);
        return;
    }
    
    notes.forEach(note => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        
        a.href = '#';
        a.textContent = note.title;
        a.setAttribute('data-id', note.id);
        
        a.addEventListener('click', (e) => {
            e.preventDefault();
            loadNoteContent(note.id);
            
            // 更新活动状态
            document.querySelectorAll('#notes-list a').forEach(item => {
                item.classList.remove('active');
            });
            a.classList.add('active');
        });
        
        li.appendChild(a);
        notesListElement.appendChild(li);
    });
}

// 加载笔记内容
function loadNoteContent(noteId) {
    const note = sampleNotes.find(note => note.id === noteId);
    
    if (note) {
        // 使用marked.js渲染Markdown内容
        noteContentElement.innerHTML = marked.parse(note.content);
    }
}

// 处理搜索功能
function handleSearch() {
    const searchTerm = searchInputElement.value.toLowerCase();
    
    // 过滤笔记
    const filteredNotes = sampleNotes.filter(note => 
        note.title.toLowerCase().includes(searchTerm) || 
        note.content.toLowerCase().includes(searchTerm)
    );
    
    renderNotesList(filteredNotes);
    
    // 如果有搜索结果，默认加载第一个
    if (filteredNotes.length > 0) {
        loadNoteContent(filteredNotes[0].id);
        
        // 设置第一个笔记为活动状态
        const firstLink = notesListElement.querySelector('a');
        if (firstLink) {
            firstLink.classList.add('active');
        }
    } else {
        noteContentElement.innerHTML = '<h2>没有找到匹配的笔记</h2><p>请尝试使用其他关键词搜索。</p>';
    }
}

// 页面加载完成后初始化
window.addEventListener('DOMContentLoaded', init);