// tslint:disable
// this is an auto generated file. This will be overwritten

export const getService = `query GetService($id: ID!) {
  getService(id: $id) {
    id
    name
    roadmap {
      items {
        id
        title
        description
      }
      nextToken
    }
  }
}
`;
export const listServices = `query ListServices(
  $filter: ModelServiceFilterInput
  $limit: Int
  $nextToken: String
) {
  listServices(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      roadmap {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getFeature = `query GetFeature($id: ID!) {
  getFeature(id: $id) {
    id
    title
    description
    service {
      id
      name
      roadmap {
        nextToken
      }
    }
    comments {
      items {
        id
        content
      }
      nextToken
    }
  }
}
`;
export const listFeatures = `query ListFeatures(
  $filter: ModelFeatureFilterInput
  $limit: Int
  $nextToken: String
) {
  listFeatures(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      service {
        id
        name
      }
      comments {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getComment = `query GetComment($id: ID!) {
  getComment(id: $id) {
    id
    content
    comment {
      id
      content
      comment {
        id
        content
      }
    }
  }
}
`;
export const listComments = `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      comment {
        id
        content
      }
    }
    nextToken
  }
}
`;
