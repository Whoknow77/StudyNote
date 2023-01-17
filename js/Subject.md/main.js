// Producer
const promise = new Promise((resolve, reject) =>{
    console.log('doing something');
 
    setTimeout(()=>{
       resolve('whonkow');
    //    reject(new Error('no network'));
    },2000);
 });
 
 //Consumer(then, catch, fianlly를 통해 Producer가 보낸 값을 받아옴), promise를 리턴함
 
 // 성공적인 케이스를 다룸
 promise.then((value)=>{
    console.log(value);
 })
 // 실패 케이스를 다룸
 .catch(error => {
    console.log(error);
 })
 // 성공/실패 여부에 상관없이 항상
 .finally(()=>
 {
    console.log('finally');
 });