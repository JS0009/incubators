from aiohttp.web import RouteTableDef, Response

routes = RouteTableDef()

@routes.post('/api/save/{dir}/{file}')
async def _save(request):
    dir = request.match_info['dir']
    file = request.match_info['file']
    text = await request.text()
    with open(f'../docs/{dir}/{file}', 'w') as f:
        f.write(text)
    return Response(text='ok', content_type='text/plain')
