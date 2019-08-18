Deploying
---

1. `aws s3 sync build s3://www.howseven.com --delete --exclude "*.DS_Store" --exclude "*.keep" --dryrun`
1. If you want to invalidate immediately: `aws cloudfront create-invalidation --distribution-id EDS7WGV8KBRZ9 --paths "/*"`
1. To check invalidation: `aws cloudfront get-invalidation --distribution-id EDS7WGV8KBRZ9 --id INVALIDATION_ID`
