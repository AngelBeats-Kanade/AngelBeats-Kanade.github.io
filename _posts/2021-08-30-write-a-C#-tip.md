---
layout: post
title:  "记一次C#的坑爹之处!"
date:   2021-08-30 03:19:36 +0800
categories: C#
---
C#默认的`bool`型都是小写字母，即`true`和`false`，但是`bool`型默认的`ToString()`方法生成的字符串会自动将首字母大写。
即`true`=>`True`，`false`=>`False`。不明白为什么C#会这样子设计，记录下来下次碰到的时候不要再掉进这个坑里。