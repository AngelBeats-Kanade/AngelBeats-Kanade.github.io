var mybutton = document.querySelector('button');

mybutton.onclick = function() {
  if (username.value == '')
    alert('请输入用户名！');
  else if (password.value == '')
    alert('请输入密码！');
  else {
    alert('登录成功！');
    window.location.href = 'test.html';
  }
}