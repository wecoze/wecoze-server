//
//           _                        
//           \`*-.                    
//            )  _`-.                 
//           .  : `. .                
//           : _   '  \               
//           ; *` _.   `*-._          
//           `-.-'          `-.       
//             ;       `       `.     
//             :.       .        \    
//             . \  .   :   .-'   .   
//             '  `+.;  ;  '      :   
//             :  '  |    ;       ;-. 
//             ; '   : :`-:     _.`* ;
//    [bug] .*' /  .*' ; .*`- +'  `*' 
//          `*-*   `*-*  `*-*'  
// 
// Created by kk on 2018/3/28.
//

import * as http from 'http'

export default async function (req: http.IncomingMessage, res: http.ServerResponse) {
  res.end('Hello')
}