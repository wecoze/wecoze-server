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
// Created by kk on 2018/3/29.
//

import micro, { RequestHandler } from 'micro'
import { Server } from 'http'

export const run_server = (fn: RequestHandler) => {
  let server: Server
  before(async () => {
    server = micro(fn).listen(3000)
  })
  after(async () => {
    server.close()
  })
}
