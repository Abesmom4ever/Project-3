import React, { useState } from 'react';
import { ajaxPost } from '../../utils/helpers';

function logOutUser() {
    const postUrl = '/api/users/logout';
    const postBody = {};
    ajaxPost(postUrl, postBody, function (result) {
        console.log(result);
        if(result.success)
        {
            localStorage.clear();
        }
    });


}

function LogOut() {
    logOutUser();
    return (
        <div>
            <h1>Logging out..</h1>
            
        </div>
    );
}

export default LogOut;