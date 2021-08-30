---
layout: post
title:  "记一次C#的坑爹之处!"
date:   2021-08-30 03:19:36 +0800
categories: C#
---
C#默认的`bool`型都是小写字母，即`true`和`false`，但是`bool`型默认的`ToString()`方法生成的字符串会自动将首字母大写。
```CSharp
private static async Task<bool> LoadStartupOnFromSettingsAsync()
{
    bool cacheSetting = false;
    string settingName = await ApplicationData.
                               Current.
                               LocalSettings.
                               ReadAsync<string>(SettingsKey);

    if (!string.IsNullOrEmpty(settingName))
    {
        cacheSetting = settingName == "true";
    }

    return cacheSetting;
}

private static async Task SaveStartupOnInSettingsAsync(bool settings)
{
    await ApplicationData.
          Current.
          LocalSettings.
          SaveAsync(SettingsKey, settings.ToString());
}
```
上面的两个函数是C#中实现有关存储用户设置和读取用户设置方法的函数。乍一看读取函数好像没有什么问题，逻辑正确，语法也正确。但是当你运行的时候你会发现这个读取函数读出来的结果永远都是false，问题出在哪里呢？这个隐秘的bug就出在这句话上。
```CSharp
cacheSetting = settingName == "true";
```
这句话里是settingName与bool型的ToString()相比较。而bool型ToString()方法会自动将首字母大写，即`true`=>`True`，`false`=>`False`。所以只要将这句话改为
```CSharp
cacheSetting = settingName == "True";
```
问题就迎刃而解了。
不明白为什么C#会这样子设计，记录下来下次碰到的时候不要再掉进这个坑里。