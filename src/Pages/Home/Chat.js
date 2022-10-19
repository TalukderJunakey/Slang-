import React from 'react';

const Chat = () => {
    return (


        <div>
            <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Chat</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div>
                            <div class="chat">
                                <div class="header">
                                    <h1>Chat</h1>
                                </div>
                                <div class="body">
                                    <p class="message">Hello</p>
                                    <p class="message user_message">Hi</p>
                                </div>
                                <div class="footer">
                                    <form>
                                        <input type="text" />
                                        <button>SEND</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <a class="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Open first modal</a>
        </div>





    );
};

export default Chat;