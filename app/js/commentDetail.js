var listComment = [{
    Id: 1,
    CreatedDate: '20/8/2020 13:30PM',
    CreatedBy: 'User1',
    CommentContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maxime soluta voluptates quidem ratione ip',
    ReplyCommentId: null,
    RequestId: 2,
    Avatar: "http://i9.photobucket.com/albums/a88/creaticode/avatar_2_zps7de12f8b.jpg"
  },
  {
    Id: 1,
    CreatedDate: '21/8/2020 12:30PM',
    CreatedBy: 'User2',
    CommentContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maxime soluta voluptates quidem ratione ip',
    ReplyCommentId: 1,
    RequestId: 2,
    Avatar: "http://i9.photobucket.com/albums/a88/creaticode/avatar_2_zps7de12f8b.jpg"
  },
  {
    Id: 1,
    CreatedDate: '20/8/2020 13:30PM',
    CreatedBy: 'User1',
    CommentContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maxime soluta voluptates quidem ratione ip',
    ReplyCommentId: null,
    RequestId: 2,
    Avatar: "http://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg"
  },
  {
    Id: 1,
    CreatedDate: '20/8/2020 13:30PM',
    CreatedBy: 'User2',
    CommentContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maxime soluta voluptates quidem ratione ip',
    ReplyCommentId: 1,
    RequestId: null,
    Avatar: "http://i9.photobucket.com/albums/a88/creaticode/avatar_2_zps7de12f8b.jpg"
  },
  {
    Id: 1,
    CreatedDate: '20/8/2020 13:30PM',
    CreatedBy: 'User3',
    CommentContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maxime soluta voluptates quidem ratione ip',
    ReplyCommentId: null,
    RequestId: 2,
    Avatar: "http://i9.photobucket.com/albums/a88/creaticode/avatar_2_zps7de12f8b.jpg"
  },
];
for(comment of listComment){
   console.log(comment.ReplyCommentId);
    if(comment.ReplyCommentId == null) {
        console.log("hello");
        addNewComment(comment.id,comment.CreatedDate,comment.CreatedBy,comment.CommentContent,comment.Avatar)
        
    }
    else{
        
    }
}




function renderSendMessage() {
    //bottom_wrapper
    // var divBottomWrapper = document.createElement('div');
    // divBottomWrapper.classList.add("bottom_wrapper" ,"clearfix");
    //message_input_wrapper
    // var divMessageInputWrapper = document.createElement('div');
    // divMessageInputWrapper.classList.add("message_input_wrapper");
    //inputMessage
    // var inputMessage = document.createElement('input');
    // inputMessage.classList.add("message_input");
    //SendMessage
    // var divSendMessage = document.createElement('div');
    // divSendMessage.classList.add("send_message");
    //Icon
    // var divIcon = document.createElement('div');
    // divIcon.classList.add("icon");
    //Icon
    // var divSend = document.createElement('div');
    // divSend.classList.add("text");   
    // divSend.innerHTML = "Send"; 

    // divSendMessage.appendChild(divIcon);
    // divSendMessage.appendChild(divSend);
    // divMessageInputWrapper.appendChild(inputMessage);
    // divBottomWrapper.appendChild(divMessageInputWrapper);divSendMessage
    // divBottomWrapper.appendChild(divSendMessage);
    // divSendMessage.onclick = function() {clickSendReplyMessage();}

    return `<div class="bottom_wrapper clearfix">
    <div class="message_input_wrapper">
        <input class="message_input" placeholder="Type your message here..." />
    </div>
    <div class="send_message">
        <div class="icon"></div>
        <div onclick="clickSendNewMessage()" class="text">Send</div>
    </div>
</div>`;
}   
function clickSendReplyMessage(){

}
function clickSendNewMessage(){
    console.log("click");
    addNewComment(listComment[1].id,listComment[1].CreatedDate,listComment[1].CreatedBy,listComment[1].CommentContent,listComment[1].Avatar)
}
function addNewComment(id,createdDate,createdBy,commentContent,avatar) {
    console.log("da vao ham");
    document.getElementById("comments-list").innerHTML += `
    <li>
    <div class="comment-main-level">
        
        <div class="comment-avatar"><img
                src=" ${avatar}      
                alt=""></div>
       
        <div class="comment-box" id = "comment">
            <div class="comment-head">
                <h6 class="comment-name by-author"><a
                        href="http://creaticode.com/blog">${createdBy}</a>
                </h6>
                <span>${createdDate}</span>
                <i class="fa fa-reply" onclick= "clickReplyMessage(${id})"></i>
                <i class="fa fa-heart"></i>
            </div>
            <div class="comment-content">
                ${commentContent}
            </div>
        </div>
    </div>
    </li>
    `;
}
// function addNewComment(id,createdDate,createdBy,commentContent,avatar) {
//     var li = document.createElement('li'); 
//     //divAvatar
//     var divAvatar = document.createElement('div');
//     divAvatar.classList.add("comment-avatar");
//     //divImg
//     var img = document.createElement('img'); 
//     img.src =  avatar; 
//     divAvatar.appendChild(img);
//     //fa-reply
//     var iconReply = document.createElement('i');
//     iconReply.classList.add("fa","fa-reply");

//     //timeComment
//     var timeSpan = document.createElement('span');
//     timeSpan.innerHTML = createdDate;
//     //h6name
//     var commentNameh6 = document.createElement('h6');
//     commentNameh6.classList.add("comment-name", "by-author");
//     commentNameh6.innerHTML = createdBy;

//     //comment-head
//     var commentHeadDiv = document.createElement('div');
//     commentHeadDiv.classList.add("comment-head");
//     commentHeadDiv.appendChild(commentNameh6);
//     commentHeadDiv.appendChild(timeSpan);
//     commentHeadDiv.appendChild(iconReply);

//     //comment-content
//     var divCommentContent = document.createElement('div');
//     divCommentContent.classList.add("comment-content");
//     divCommentContent.innerHTML = commentContent;
//     //coment-box
//     var divCommentBox = document.createElement('div');
//     divCommentBox.classList.add("comment-box");
//     divCommentBox.appendChild(commentHeadDiv);
//     divCommentBox.appendChild(divCommentContent);
//     //divCommentLevel
//     var divCommentMainLevel = document.createElement('div');
//     divCommentMainLevel.classList.add("comment-main-level");
//     //add into CommentMain
//     divCommentMainLevel.appendChild(divAvatar);
//     divCommentMainLevel.appendChild(divCommentBox);
//     //add into li
//     li.appendChild(divCommentMainLevel);
//     document.getElementById("comments-list").appendChild(li);
//     iconReply.onclick = function() {clickReplyMessage(id,divCommentBox);}
//     //add commment-reply

//   }
// function clickReplyMessage(id,divCommentBox){
//     console.log("click vao reply");
//     formSendMessage = createSendMessage();
//     divCommentBox.appendChild(formSendMessage);
// }
function clickReplyMessage(id){
    console.log("click vao reply");
    formSendMessage = renderSendMessage();
    console.log(formSendMessage);
    document.getElementById("comment").innerHTML += formSendMessage;
    // divCommentBox.appendChild(formSendMessage);
}