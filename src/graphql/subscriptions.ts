// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateService = `subscription OnCreateService {
  onCreateService {
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
export const onUpdateService = `subscription OnUpdateService {
  onUpdateService {
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
export const onDeleteService = `subscription OnDeleteService {
  onDeleteService {
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
export const onCreateFeature = `subscription OnCreateFeature {
  onCreateFeature {
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
export const onUpdateFeature = `subscription OnUpdateFeature {
  onUpdateFeature {
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
export const onDeleteFeature = `subscription OnDeleteFeature {
  onDeleteFeature {
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
export const onCreateComment = `subscription OnCreateComment {
  onCreateComment {
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
export const onUpdateComment = `subscription OnUpdateComment {
  onUpdateComment {
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
export const onDeleteComment = `subscription OnDeleteComment {
  onDeleteComment {
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
