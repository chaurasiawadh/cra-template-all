const FolderStructure = () => {
  return (
    <div className="folderStructure-box">
      <h4 className="fix-header">Folder &  File Structure</h4>

      <div style={{ marginLeft: 30 }}>
        <p className="point">
          Folder name: start with small letter.
        </p>
        <p className="point">
          File name(ts file): start with small letter.
        </p>
        <p className="point">
          Component name(tsx file): start with capital letter.
        </p>
      </div>

      <pre>
        <code>
          {`     Project Name
            └── src
                └── assets 
                └── config
                └── layout
                └── modules
                └── shared
                └── store
                └── utils
                
                assets 
                    └── jpeg
                    └── pdf
                    └── png
                    └── styles

                config
                    └── route
                        ├── PrivateRoutes.tsx
                        ├── PublicRoutes.tsx
                        ├── RouteLoader.tsx
                        ├── RoutesConfig.tsx
                    └── configureStore.ts

                layout
                    └── header
                        ├── header.tsx
                    └── footer
                        ├── footer.tsx

                modules
                    └── home
                        ├── Home.tsx
                    └── profile
                        ├── profile.tsx

                shared
                    └── components
                    └── constants
                        ├── common.ts
                        ├── urls.ts
                    └── hooks
                    └── models
                    └── services
                        ├── applicationDetailService.ts
                        ├── axiosSendRequestService.ts
                        ├── fetchSendRequestService.ts

                store
                    └── actions
                    └── models
                    └── reducers
                    └── sagas
                    └── types
                    └── index.ts
                        `}
        </code>
      </pre>
    </div>
  );
};

export default FolderStructure;
