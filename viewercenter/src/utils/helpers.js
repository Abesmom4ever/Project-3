export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

export function ajaxPost(postUrl, postBody, callback) {

    const requestMetadata = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postBody)
    };
    fetch(postUrl, requestMetadata)
        .then(res => res.json())
        .then(result => {
            callback(result);
        }).catch(error => {
            callback(error);
        });

}
