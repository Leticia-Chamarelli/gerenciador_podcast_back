# Podcasts Manager

### Descrição
App para centralização de diversos episódios de podcasts separados por categoria. 

### Domínio
Podcasts feitos em vídeo

### Features
- Listar espisódios de podcasts por seções de categorias
  - Saúde, fitness, mentalidade, humor
- Filtrar os espisódios de podcasts por nome

### Como
- Listar espisódios de podcasts por seções de categorias

### Implementação
Retornar API REST (json) o nome do podcast,
Nome do episódio,
Imagem de capa,
Link,
Categoria.

```js
[
{
    podcastName: "Flow",
    episode: "CBUM - Flow #319",
    videoId: "pQSuQmUfS30&pp",
    cover: "https://i.ytimg.com/vi/pQSuQmUfS30/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&amp;rs=AOn4CLCeNGQeHGq3EN9VBoh7CCsKQU0L4Q",
    link: "https://www.youtube.com/watch?v=pQSuQmUfS30&pp=ygURZmxvdyBwb2RjYXN0IGNidW0%3D",
    category: ["saúde", "bodybuilder", "esporte"]
},
{
    podcastName: "Flow",
    episode: "LEANDRO HASSUM - Flow #254",
    videoId: "VsMWR1bfY1E&pp",
    cover: "https://i.ytimg.com/vi/VsMWR1bfY1E/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAngjN7vtNYP5sqlpVjPph8jF0jKg",
    link: "https://www.youtube.com/watch?v=VsMWR1bfY1E&pp=ygUTZmxvdyBsZWFuZHJvIGhhc3N1bQ%3D%3D",
    category: ["humor"]
}
]
```