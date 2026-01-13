export interface BackendResult {
    text:            string;
    highlightedHTML: string;
    biases?:          Biases[];
    score?:           number;
    pronounStats?:    Record<string,number>;
    biasData?:        BiasData[];
}

interface BiasData {
    id:           string;
    text:         string;
    type:         string;
    start:        number;
    end:          number;
    description:  string;
    suggestion:   string;
    alternatives: string[];
    severity:     string;
    color:        string;
}

interface Biases {
    id:           string;
    type:         string;
    targetText:   string;
    position:     {start: number, end: number};
    description:  string;
    suggestion:   string;
    alternatives: string[];
    severity:     string;
    confidence?:  number;
    color?:       string;
}
