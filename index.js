const request = require( 'httprequest' )

const replace = function translate_replace( html ) {
    return html.replace( /(<\/)( )([A-z]+>)/g, '$1$3')
}

const translate = function translate_translate ( api, source = null, target = 'en', text, contentType ) {
    const body = request( 'get', api, { params: { text, source, target, contentType } } )
    if ( contentType === 'html' ) return unescape( replace( body ) )
    return unescape( body )
}

module.exports = translate