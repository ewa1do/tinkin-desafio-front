export type SearchAction = {
    type: "SEARCH";
    payload: string;
};

export type Action = { type: "RECEIVED" } | SearchAction;
