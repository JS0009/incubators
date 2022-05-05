#!/usr/bin/env python
#-*- coding: utf-8 -*-

import boto3
import re

re_file_ext = re.compile(r'.*\.([a-z]+)$')

session = boto3.session.Session()
s3 = session.client(
    service_name='s3',
    endpoint_url='https://storage.yandexcloud.net'
)

BUCKET_NAME='teachers-bucket'

## Из строки
#s3.put_object(Bucket='bucket-name', Key='object_name', Body='TEST', StorageClass='COLD')

def get_content_type(fn):
    m_file_ext = re.match(re_file_ext, fn)
    ext = m_file_ext.group(1)
    if ext == 'css':
        return 'text/css'
    elif ext == 'js':
        return 'application/javascript'
    elif ext == 'html':
        return 'text/html'
    elif ext == 'svg':
        return 'image/svg'
    elif ext == 'png':
        return 'image/png'
    elif ext == 'jpg':
        return 'image/jpeg'
    else:
        return 'text/plain'

with open('scripts/upload-files.txt', 'r') as file_names:
    for fn in file_names:
        fn = fn.strip()
        if not fn:
            continue
        ext = get_content_type(fn)
        print(f'Uploading {fn} as {ext}')
        s3.upload_file(fn, BUCKET_NAME, fn.replace('docs/', ''), ExtraArgs={'ContentType': ext, 'ACL': "public-read"})
