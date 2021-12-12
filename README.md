# Movie-Review

The movie-review can get the movies from the database, by search the genres the platform would provide the results and the movie details.

## Getting Started

Download the movie-review repo

You can now deploy the movie-review

```bash
npm run dev
```

Open[localhost:3000](http://localhost:3000) with your browser to see the result.

## Developing

Notable libraries in use are as follows:

- `Framework`: [NextJS](https://nextjs.org/docs/basic-features/pages)
- `UI Design System`: [Chakra UI](https://chakra-ui.com/docs/principles)
- `DataBase`:[TMDB](https://www.themoviedb.org/)

The project follows a domain approach to organizational structure of code as follows:

```bash
./pages
|-- core
|   |-- common
|   |   |-- components
|   |   |-- types
|   |-- components
`-- theme
```

### Common Components

Components are a bit special as they have more supporting files than most entities in the UI. A component shall always
have a directory named after the component, with a corresponding component file based on the same name with `.tsx`
suffix. An `index.ts` file will exist to export any functionality from the component Folder, including the component and
any types associated.

Ex. Button Component

```bash
./pages
|-- core
|   |-- common
|   |   |-- components
|   |   |   |-- Button
|   |   |   |   |-- Button.tsx
|   |   |   |   `-- index.ts
```

#### Page Components

Page components utilize nextjs routing mechanisms where the file system structure is your resulting url path in which will load your Page Component.

ex. Routing

- Index: `pages/index.tsx` -> `/`
- Movie: `pages/components/Movie/components/index.tsx` -> `/Movie`

ex. Component Definition

```tsx
import { PageComponent } from '@/core/common/types/page'

const MyComponent: PageComponent = () => {
  return (
    ...
  )
}

export default MyComponent
```
