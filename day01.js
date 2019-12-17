
// module和exports
    // var a = 100;
    // module.exports.a = a;
    // console.log(module);
    // var m5 = require('./1')
    // console.log(exports)



// Global全局变量之process对象
    // process.argv.forEach(function (val, index,  array) {
    //   console.log(index + ': ' + val)
    // })
    // console.log(process.env)   // 返回用户环境信息
    // process.pid: 返回进程的pid(可到任务管理器中查看)
    // console.log(process.pid); // 4452
    // process.title: 当前进程的显示名称
    // console.log(process.title); // C:\WINDOWS\System32\WindowsPowerShell\v1.0\powershell.exe
    // process.arch: 返回当前CPU处理器架构arm/ia32/x64
    // console.log(process.arch); // X64

// process对象：stdin, stdout标准输入输出流(IO)
    //  stdin和stdout提供了操作输入数据和输出数据的方法，
    //  我们通常称为IO操作
    //  stdin: 标准输入流
    //  stdout: 标准输出流

    // 默认情况下，输入流是关闭的，要监听处理输入流数据，首先要开启输入流
    // process.stdin.resume();
    // 用于监听用户的输入数据
    // process.stdin.on('data', function (chunk) {
    //     process.stdout.write(chunk)
    //     console.log('用户输入了：' + chunk)
    //     process.exit()
    // })

    var a,
       b;
     process.stdin.resume();
     process.stdout.write('请输入a的值：');
     process.stdin.on('data', function (chunk) {
       if (!a) {
         a = Number(chunk);
         process.stdout.write('请输入b的值：');
      } else {
         b = Number(chunk);
         process.stdout.write('a + b = ' + (a + b));
         process.exit();
       }
    });