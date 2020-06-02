let contents;

export function get(req, res) {
    const apiUrl = process.env.SAPPER_APP_API_URL
    const posts = fetch(`${apiUrl}/${params.slug}/index.json`)

    contents = JSON.stringify(posts);

    res.writeHead(200, {
        'Content-Type': 'application/json'
    })

    res.end(contents)
}