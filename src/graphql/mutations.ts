// tslint:disable
// this is an auto generated file. This will be overwritten

export const createService = `mutation CreateService($input: CreateServiceInput!) {
  createService(input: $input) {
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
export const updateService = `mutation UpdateService($input: UpdateServiceInput!) {
  updateService(input: $input) {
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
export const deleteService = `mutation DeleteService($input: DeleteServiceInput!) {
  deleteService(input: $input) {
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
export const createFeature = `mutation CreateFeature($input: CreateFeatureInput!) {
  createFeature(input: $input) {
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
export const updateFeature = `mutation UpdateFeature($input: UpdateFeatureInput!) {
  updateFeature(input: $input) {
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
export const deleteFeature = `mutation DeleteFeature($input: DeleteFeatureInput!) {
  deleteFeature(input: $input) {
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
export const createComment = `mutation CreateComment($input: CreateCommentInput!) {
  createComment(input: $input) {
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
export const updateComment = `mutation UpdateComment($input: UpdateCommentInput!) {
  updateComment(input: $input) {
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
export const deleteComment = `mutation DeleteComment($input: DeleteCommentInput!) {
  deleteComment(input: $input) {
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
