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
    Id: 2,
    CreatedDate: '21/8/2020 12:30PM',
    CreatedBy: 'User2',
    CommentContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maxime soluta voluptates quidem ratione ip',
    ReplyCommentId: 1,
    RequestId: 2,
    Avatar: "http://i9.photobucket.com/albums/a88/creaticode/avatar_2_zps7de12f8b.jpg"
  },
  {
    Id: 3,
    CreatedDate: '20/8/2020 13:30PM',
    CreatedBy: 'User3',
    CommentContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maxime soluta voluptates quidem ratione ip',
    ReplyCommentId: null,
    RequestId: 2,
    Avatar: "http://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg"
  },
  {
    Id: 4,
    CreatedDate: '20/8/2020 13:30PM',
    CreatedBy: 'User4',
    CommentContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maxime soluta voluptates quidem ratione ip',
    ReplyCommentId: 1,
    RequestId: 1,
    Avatar: "http://i9.photobucket.com/albums/a88/creaticode/avatar_2_zps7de12f8b.jpg"
  },
  {
    Id: 5,
    CreatedDate: '20/8/2020 13:30PM',
    CreatedBy: 'User5',
    CommentContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maxime soluta voluptates quidem ratione ip',
    ReplyCommentId: 3,
    RequestId: 2,
    Avatar: "http://i9.photobucket.com/albums/a88/creaticode/avatar_2_zps7de12f8b.jpg"
  },
];


for(comment of listComment){
   console.log(comment.ReplyCommentId);
    if(comment.ReplyCommentId == null) {
        console.log("hello");
        addNewComment(comment.Id,comment.CreatedDate,comment.CreatedBy,comment.CommentContent,comment.Avatar)
        
    }
    else{
        clickSendReplyMessage(comment.ReplyCommentId,comment.CreatedDate,comment.CreatedBy,comment.CommentContent,comment.Avatar);
        
    }
}
function renderSendMessage(idReplyComment) {
    return `<div class="bottom_wrapper clearfix">
    <div class="message_input_wrapper">
        <input class="message_input" placeholder="Type your message here..." />
    </div>
    <div class="send_message" onclick="clickSendReplyMessage(${idReplyComment})">
        <div class="icon"></div>
        <div  class="text">Send</div>
    </div>
    </div>`;
}   
function clickSendReplyMessage(idReplyComment,createdDate,createdBy,commentContent,avatar){
    document.getElementById("replycomment_"+idReplyComment).innerHTML += `
    <li>                                             
        <div class="comment-avatar"><img
                src="${avatar}"
                alt=""></div>
        
        <div class="comment-box">
            <div class="comment-head">
                <h6 class="comment-name by-author"><a
                        href="http://creaticode.com/blog">${createdBy}</a></h6>
                <span>${createdDate}</span>
            </div>
            <div class="comment-content">
                ${commentContent}
            </div>
        </div>
    </li>
    `
}
function clickSendNewMessage(){
    console.log("click");
    var commentContent = document.getElementById("message_input_main").value;
    addNewComment(listComment[1].id,listComment[1].CreatedDate,listComment[1].CreatedBy,commentContent,listComment[1].Avatar)
    document.getElementById("message_input_main").value = '';
}
function addNewComment(idComment,createdDate,createdBy,commentContent,avatar) {
    console.log(idComment);
    document.getElementById("comments-list").innerHTML += `
    <li>
    <div class="comment-main-level">
        
        <div class="comment-avatar"><img
                src=" ${avatar}"     
                alt=""></div>
       
        <div class="comment-box" id = "commentbox_${idComment}">
            <div class="comment-head">
                <h6 class="comment-name by-author"><a
                        href="http://creaticode.com/blog">${createdBy}</a>
                </h6>
                <span>${createdDate}</span>
                <i class="fa fa-reply" onclick= "clickReplyMessage(${idComment})"></i>
                <i class="fa fa-heart"></i>
            </div>
            <div class="comment-content">
                ${commentContent}
            </div>
        </div>
    </div>
        <ul class="comments-list reply-list" id = "replycomment_${idComment}">
        </ul>
    </li>
    `;
}
function clickReplyMessage(idComment){
    console.log("click vao reply");
    
    formSendMessage = renderSendMessage(idComment);
    document.getElementById('commentbox_'+idComment).innerHTML += formSendMessage;
}