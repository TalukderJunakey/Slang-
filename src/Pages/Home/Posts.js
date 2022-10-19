import React from 'react';
import img1 from '../../images/p1.jpg'
import img2 from '../../images/p2.jpg'
import img3 from '../../images/p3.jpg'

const Posts = () => {
    return (
        <div class='main-post mb-2'>

            <div class='post-box'>
                <figure className='post-box'>
                    <img src={img1} alt="" />
                    <button className='button text-center'>


                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Buy
                        </button>


                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Chat</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body ">

                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Post</button>

                                        <p> Comments</p>

                                    </div>





                                    <div class="modal-footer">
                                        <h1>@cash_bliz Yes it is. Want it?</h1>
                                        <br />
                                        <p>5 months ago · @kevin · seller</p>
                                    </div>
                                    <br />

                                    <div class="modal-footer">
                                        <h1>Still up for sale</h1>
                                        <br />
                                        <p>5 months ago · @cash_bliz</p>
                                    </div>
                                    <br />

                                    <div class="modal-footer">
                                        <h1>@kathy_kathy_lawson_fish Hello, would you like to buy?</h1>
                                        <br />
                                        <p>8 months ago · @kevin · seller</p>
                                    </div>
                                    <br />
                                    <br />
                                    <div class="modal-footer">
                                        <h1>Hello</h1>
                                        <br />
                                        <p>9 months ago · @kathy_kathy_lawson_fish</p>
                                    </div>
                                    <br />

                                    <div class="modal-footer">
                                        <h1>@dawson_delgado Yes it sure is. Interested?</h1>
                                        <br />
                                        <p>1 year ago · @kevin · seller</p>
                                    </div>
                                    <br />

                                    <div class="modal-footer">
                                        <h1>@dawson_delgado Yes it sure is. Interested?</h1>
                                        <br />
                                        <p>1 year ago · @kevin · seller</p>
                                    </div>
                                    <br />

                                    <div class="modal-footer">
                                        <h1>
                                            Hello is this still available?</h1>
                                        <br />
                                        <p>1 year ago · @dawson_delgado</p>
                                    </div>
                                    <br />

                                    <div class="modal-footer " data-bs-dismiss="modal">
                                        <h1>@hannah_lyles Hi! Yes it is.</h1>
                                        <br />
                                        <p>1 year ago · @kevin · seller</p>
                                    </div>
                                    <br />

                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Load More Comments</button>
                                </div>
                            </div>
                        </div>
                    </button>
                </figure>

            </div>


            <div class='post-box'>
                <img src={img2} alt="" />
                <button className='button text-center'>


                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Buy
                    </button>


                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Chat</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body ">

                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Post</button>

                                    <p> Comments</p>

                                </div>





                                <div class="modal-footer">
                                    <h1>@cash_bliz Yes it is. Want it?</h1>
                                    <br />
                                    <p>5 months ago · @kevin · seller</p>
                                </div>
                                <br />

                                <div class="modal-footer">
                                    <h1>Still up for sale</h1>
                                    <br />
                                    <p>5 months ago · @cash_bliz</p>
                                </div>
                                <br />

                                <div class="modal-footer">
                                    <h1>@kathy_kathy_lawson_fish Hello, would you like to buy?</h1>
                                    <br />
                                    <p>8 months ago · @kevin · seller</p>
                                </div>
                                <br />
                                <br />
                                <div class="modal-footer">
                                    <h1>Hello</h1>
                                    <br />
                                    <p>9 months ago · @kathy_kathy_lawson_fish</p>
                                </div>
                                <br />

                                <div class="modal-footer">
                                    <h1>@dawson_delgado Yes it sure is. Interested?</h1>
                                    <br />
                                    <p>1 year ago · @kevin · seller</p>
                                </div>
                                <br />

                                <div class="modal-footer">
                                    <h1>@dawson_delgado Yes it sure is. Interested?</h1>
                                    <br />
                                    <p>1 year ago · @kevin · seller</p>
                                </div>
                                <br />

                                <div class="modal-footer">
                                    <h1>
                                        Hello is this still available?</h1>
                                    <br />
                                    <p>1 year ago · @dawson_delgado</p>
                                </div>
                                <br />

                                <div class="modal-footer " data-bs-dismiss="modal">
                                    <h1>@hannah_lyles Hi! Yes it is.</h1>
                                    <br />
                                    <p>1 year ago · @kevin · seller</p>
                                </div>
                                <br />

                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Load More Comments</button>
                            </div>
                        </div>
                    </div>
                </button>
                <br />

            </div>



            <div class='post-box'>
                <img src={img3} alt="" />
                <button className='button text-center'>


                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Buy
                    </button>


                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Chat</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body ">

                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Post</button>

                                    <p> Comments</p>

                                </div>





                                <div class="modal-footer">
                                    <h1>@cash_bliz Yes it is. Want it?</h1>
                                    <br />
                                    <p>5 months ago · @kevin · seller</p>
                                </div>
                                <br />

                                <div class="modal-footer">
                                    <h1>Still up for sale</h1>
                                    <br />
                                    <p>5 months ago · @cash_bliz</p>
                                </div>
                                <br />

                                <div class="modal-footer">
                                    <h1>@kathy_kathy_lawson_fish Hello, would you like to buy?</h1>
                                    <br />
                                    <p>8 months ago · @kevin · seller</p>
                                </div>
                                <br />
                                <br />
                                <div class="modal-footer">
                                    <h1>Hello</h1>
                                    <br />
                                    <p>9 months ago · @kathy_kathy_lawson_fish</p>
                                </div>
                                <br />

                                <div class="modal-footer">
                                    <h1>@dawson_delgado Yes it sure is. Interested?</h1>
                                    <br />
                                    <p>1 year ago · @kevin · seller</p>
                                </div>
                                <br />

                                <div class="modal-footer">
                                    <h1>@dawson_delgado Yes it sure is. Interested?</h1>
                                    <br />
                                    <p>1 year ago · @kevin · seller</p>
                                </div>
                                <br />

                                <div class="modal-footer">
                                    <h1>
                                        Hello is this still available?</h1>
                                    <br />
                                    <p>1 year ago · @dawson_delgado</p>
                                </div>
                                <br />

                                <div class="modal-footer " data-bs-dismiss="modal">
                                    <h1>@hannah_lyles Hi! Yes it is.</h1>
                                    <br />
                                    <p>1 year ago · @kevin · seller</p>
                                </div>
                                <br />

                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Load More Comments</button>
                            </div>
                        </div>
                    </div>
                </button>
                <br />

            </div>

            <div class='post-box'>
                <img src={img2} alt="" />
                <button className='button text-center'>


                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Buy
                    </button>


                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Chat</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body ">

                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Post</button>

                                    <p> Comments</p>

                                </div>





                                <div class="modal-footer">
                                    <h1>@cash_bliz Yes it is. Want it?</h1>
                                    <br />
                                    <p>5 months ago · @kevin · seller</p>
                                </div>
                                <br />

                                <div class="modal-footer">
                                    <h1>Still up for sale</h1>
                                    <br />
                                    <p>5 months ago · @cash_bliz</p>
                                </div>
                                <br />

                                <div class="modal-footer">
                                    <h1>@kathy_kathy_lawson_fish Hello, would you like to buy?</h1>
                                    <br />
                                    <p>8 months ago · @kevin · seller</p>
                                </div>
                                <br />
                                <br />
                                <div class="modal-footer">
                                    <h1>Hello</h1>
                                    <br />
                                    <p>9 months ago · @kathy_kathy_lawson_fish</p>
                                </div>
                                <br />

                                <div class="modal-footer">
                                    <h1>@dawson_delgado Yes it sure is. Interested?</h1>
                                    <br />
                                    <p>1 year ago · @kevin · seller</p>
                                </div>
                                <br />

                                <div class="modal-footer">
                                    <h1>@dawson_delgado Yes it sure is. Interested?</h1>
                                    <br />
                                    <p>1 year ago · @kevin · seller</p>
                                </div>
                                <br />

                                <div class="modal-footer">
                                    <h1>
                                        Hello is this still available?</h1>
                                    <br />
                                    <p>1 year ago · @dawson_delgado</p>
                                </div>
                                <br />

                                <div class="modal-footer " data-bs-dismiss="modal">
                                    <h1>@hannah_lyles Hi! Yes it is.</h1>
                                    <br />
                                    <p>1 year ago · @kevin · seller</p>
                                </div>
                                <br />

                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Load More Comments</button>
                            </div>
                        </div>
                    </div>
                </button>
                <br />

            </div>

            <div class='post-box'>
                <img src={img3} alt="" />
                <button className='button text-center'>


                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Buy
                    </button>


                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Chat</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body ">

                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Post</button>

                                    <p> Comments</p>

                                </div>





                                <div class="modal-footer">
                                    <h1>@cash_bliz Yes it is. Want it?</h1>
                                    <br />
                                    <p>5 months ago · @kevin · seller</p>
                                </div>
                                <br />

                                <div class="modal-footer">
                                    <h1>Still up for sale</h1>
                                    <br />
                                    <p>5 months ago · @cash_bliz</p>
                                </div>
                                <br />

                                <div class="modal-footer">
                                    <h1>@kathy_kathy_lawson_fish Hello, would you like to buy?</h1>
                                    <br />
                                    <p>8 months ago · @kevin · seller</p>
                                </div>
                                <br />
                                <br />
                                <div class="modal-footer">
                                    <h1>Hello</h1>
                                    <br />
                                    <p>9 months ago · @kathy_kathy_lawson_fish</p>
                                </div>
                                <br />

                                <div class="modal-footer">
                                    <h1>@dawson_delgado Yes it sure is. Interested?</h1>
                                    <br />
                                    <p>1 year ago · @kevin · seller</p>
                                </div>
                                <br />

                                <div class="modal-footer">
                                    <h1>@dawson_delgado Yes it sure is. Interested?</h1>
                                    <br />
                                    <p>1 year ago · @kevin · seller</p>
                                </div>
                                <br />

                                <div class="modal-footer">
                                    <h1>
                                        Hello is this still available?</h1>
                                    <br />
                                    <p>1 year ago · @dawson_delgado</p>
                                </div>
                                <br />

                                <div class="modal-footer " data-bs-dismiss="modal">
                                    <h1>@hannah_lyles Hi! Yes it is.</h1>
                                    <br />
                                    <p>1 year ago · @kevin · seller</p>
                                </div>
                                <br />

                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Load More Comments</button>
                            </div>
                        </div>
                    </div>
                </button>
                <br />

            </div>
            <div class='post-box'>
                <img src={img2} alt="" />
                <button className='button text-center'>


                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Buy
                    </button>


                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Chat</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body ">

                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Post</button>

                                    <p> Comments</p>

                                </div>





                                <div class="modal-footer">
                                    <h1>@cash_bliz Yes it is. Want it?</h1>
                                    <br />
                                    <p>5 months ago · @kevin · seller</p>
                                </div>
                                <br />

                                <div class="modal-footer">
                                    <h1>Still up for sale</h1>
                                    <br />
                                    <p>5 months ago · @cash_bliz</p>
                                </div>
                                <br />

                                <div class="modal-footer">
                                    <h1>@kathy_kathy_lawson_fish Hello, would you like to buy?</h1>
                                    <br />
                                    <p>8 months ago · @kevin · seller</p>
                                </div>
                                <br />
                                <br />
                                <div class="modal-footer">
                                    <h1>Hello</h1>
                                    <br />
                                    <p>9 months ago · @kathy_kathy_lawson_fish</p>
                                </div>
                                <br />

                                <div class="modal-footer">
                                    <h1>@dawson_delgado Yes it sure is. Interested?</h1>
                                    <br />
                                    <p>1 year ago · @kevin · seller</p>
                                </div>
                                <br />

                                <div class="modal-footer">
                                    <h1>@dawson_delgado Yes it sure is. Interested?</h1>
                                    <br />
                                    <p>1 year ago · @kevin · seller</p>
                                </div>
                                <br />

                                <div class="modal-footer">
                                    <h1>
                                        Hello is this still available?</h1>
                                    <br />
                                    <p>1 year ago · @dawson_delgado</p>
                                </div>
                                <br />

                                <div class="modal-footer " data-bs-dismiss="modal">
                                    <h1>@hannah_lyles Hi! Yes it is.</h1>
                                    <br />
                                    <p>1 year ago · @kevin · seller</p>
                                </div>
                                <br />

                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Load More Comments</button>
                            </div>
                        </div>
                    </div>
                </button>
                <br />

            </div>
            <div class='post-box'>
                <img src={img3} alt="" />
                <button className='button text-center'>


                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Buy
                    </button>


                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Chat</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body ">

                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Post</button>

                                    <p> Comments</p>

                                </div>





                                <div class="modal-footer">
                                    <h1>@cash_bliz Yes it is. Want it?</h1>
                                    <br />
                                    <p>5 months ago · @kevin · seller</p>
                                </div>
                                <br />

                                <div class="modal-footer">
                                    <h1>Still up for sale</h1>
                                    <br />
                                    <p>5 months ago · @cash_bliz</p>
                                </div>
                                <br />

                                <div class="modal-footer">
                                    <h1>@kathy_kathy_lawson_fish Hello, would you like to buy?</h1>
                                    <br />
                                    <p>8 months ago · @kevin · seller</p>
                                </div>
                                <br />
                                <br />
                                <div class="modal-footer">
                                    <h1>Hello</h1>
                                    <br />
                                    <p>9 months ago · @kathy_kathy_lawson_fish</p>
                                </div>
                                <br />

                                <div class="modal-footer">
                                    <h1>@dawson_delgado Yes it sure is. Interested?</h1>
                                    <br />
                                    <p>1 year ago · @kevin · seller</p>
                                </div>
                                <br />

                                <div class="modal-footer">
                                    <h1>@dawson_delgado Yes it sure is. Interested?</h1>
                                    <br />
                                    <p>1 year ago · @kevin · seller</p>
                                </div>
                                <br />

                                <div class="modal-footer">
                                    <h1>
                                        Hello is this still available?</h1>
                                    <br />
                                    <p>1 year ago · @dawson_delgado</p>
                                </div>
                                <br />

                                <div class="modal-footer " data-bs-dismiss="modal">
                                    <h1>@hannah_lyles Hi! Yes it is.</h1>
                                    <br />
                                    <p>1 year ago · @kevin · seller</p>
                                </div>
                                <br />

                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Load More Comments</button>
                            </div>
                        </div>
                    </div>
                </button>
                <br />

            </div>
            <div class='post-box'>
                <img src={img1} alt="" />
                <button className='button text-center'>


                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Buy
                    </button>


                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Chat</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body ">

                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Post</button>

                                    <p> Comments</p>

                                </div>





                                <div class="modal-footer">
                                    <h1>@cash_bliz Yes it is. Want it?</h1>
                                    <br />
                                    <p>5 months ago · @kevin · seller</p>
                                </div>
                                <br />

                                <div class="modal-footer">
                                    <h1>Still up for sale</h1>
                                    <br />
                                    <p>5 months ago · @cash_bliz</p>
                                </div>
                                <br />

                                <div class="modal-footer">
                                    <h1>@kathy_kathy_lawson_fish Hello, would you like to buy?</h1>
                                    <br />
                                    <p>8 months ago · @kevin · seller</p>
                                </div>
                                <br />
                                <br />
                                <div class="modal-footer">
                                    <h1>Hello</h1>
                                    <br />
                                    <p>9 months ago · @kathy_kathy_lawson_fish</p>
                                </div>
                                <br />

                                <div class="modal-footer">
                                    <h1>@dawson_delgado Yes it sure is. Interested?</h1>
                                    <br />
                                    <p>1 year ago · @kevin · seller</p>
                                </div>
                                <br />

                                <div class="modal-footer">
                                    <h1>@dawson_delgado Yes it sure is. Interested?</h1>
                                    <br />
                                    <p>1 year ago · @kevin · seller</p>
                                </div>
                                <br />

                                <div class="modal-footer">
                                    <h1>
                                        Hello is this still available?</h1>
                                    <br />
                                    <p>1 year ago · @dawson_delgado</p>
                                </div>
                                <br />

                                <div class="modal-footer " data-bs-dismiss="modal">
                                    <h1>@hannah_lyles Hi! Yes it is.</h1>
                                    <br />
                                    <p>1 year ago · @kevin · seller</p>
                                </div>
                                <br />

                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Load More Comments</button>
                            </div>
                        </div>
                    </div>
                </button>
                <br />

            </div>





        </div>
    );
};

export default Posts;