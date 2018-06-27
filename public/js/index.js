 var socket= io();
          socket.on('connect',()=>{
           console.log('Connetedt to the server');

          socket.emit('createMessage',{
              from:'hemant',
              text:'That Works for me'
          })
          // socket.emit('createEmail',{
          //      to:'solankihemant36@gmial.com',
          //      text:'Hey, this the of sock node js'
         //  });
          });
          socket.on('disconnect',()=>{
           console.log('Disconnected server');
          });

          socket.on('newEmail',(email)=>{
          console.log('New Email is created',email);
          });

          socket.on('newMessage',(message)=>{
           console.log('newMessage',message);
          });