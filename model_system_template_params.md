# [tinyllama:1.1b](https://ollama.com/library/tinyllama:1.1b)


## [system](https://ollama.com/library/tinyllama:1.1b/blobs/c8472cd9daed)
```
You are a helpful AI assistant.
```

## [template](https://ollama.com/library/tinyllama:1.1b/blobs/af0ddbdaaa26)
af0ddbdaaa26 · 70B
```js?
<|system|>
{{ .System }}</s>
<|user|>
{{ .Prompt }}</s>
<|assistant|>
```


## [params](https://ollama.com/library/tinyllama:1.1b/blobs/fa956ab37b8c) 
fa956ab37b8c · 98B
```json
{
    "stop": [
        "<|system|>",
        "<|user|>",
        "<|assistant|>",
        "</s>"
    ]
}
```

## [model](https://ollama.com/library/tinyllama:1.1b/blobs/2af3b81862c6)

```markdown

tinyllama:1.1b
/
model
2af3b81862c6 · 638MB

    Metadata
    general.architecture
    llama
    general.file_type
    Q4_0
    llama.attention.head_count
    32
    llama.attention.head_count_kv
    4
    llama.attention.layer_norm_rms_epsilon
    1e-05
    llama.block_count
    22
    llama.context_length
    2048
    llama.embedding_length
    2048
    llama.feed_forward_length
    5632
    llama.rope.dimension_count
    64
    llama.rope.freq_base
    10000
    tokenizer.ggml.bos_token_id
    1
    tokenizer.ggml.eos_token_id
    2
    tokenizer.ggml.merges
    [▁ t, e r, i n, ▁ a, e n, ...]
    tokenizer.ggml.model
    llama
    tokenizer.ggml.padding_token_id
    2
    tokenizer.ggml.scores
    [0, 0, 0, 0, 0, ...]
    tokenizer.ggml.token_type
    [2, 3, 3, 6, 6, ...]
    tokenizer.ggml.tokens
    [<unk>, <s>, </s>, <0x00>, <0x01>, ...]
    tokenizer.ggml.unknown_token_id
    0
    Tensor
    Name
    Type
    Shape
    token_embd.weight
    Q4_0
    [2048, 32000]
    blk.0
    blk.0.attn_k.weight
    Q4_0
    [2048, 256]
    blk.0.attn_norm.weight
    F32
    [2048]
    blk.0.attn_output.weight
    Q4_0
    [2048, 2048]
    blk.0.attn_q.weight
    Q4_0
    [2048, 2048]
    blk.0.attn_v.weight
    Q4_0
    [2048, 256]
    blk.0.ffn_down.weight
    Q4_0
    [5632, 2048]
    blk.0.ffn_gate.weight
    Q4_0
    [2048, 5632]
    blk.0.ffn_norm.weight
    F32
    [2048]
    blk.0.ffn_up.weight
    Q4_0
    [2048, 5632]
    blk.1
    blk.1.attn_k.weight
    Q4_0
    [2048, 256]
    blk.1.attn_norm.weight
    F32
    [2048]
    blk.1.attn_output.weight
    Q4_0
    [2048, 2048]
    blk.1.attn_q.weight
    Q4_0
    [2048, 2048]
    blk.1.attn_v.weight
    Q4_0
    [2048, 256]
    blk.1.ffn_down.weight
    Q4_0
    [5632, 2048]
    blk.1.ffn_gate.weight
    Q4_0
    [2048, 5632]
    blk.1.ffn_norm.weight
    F32
    [2048]
    blk.1.ffn_up.weight
    Q4_0
    [2048, 5632]
    blk.2
    blk.2.attn_k.weight
    Q4_0
    [2048, 256]
    blk.2.attn_norm.weight
    F32
    [2048]
    blk.2.attn_output.weight
    Q4_0
    [2048, 2048]
    blk.2.attn_q.weight
    Q4_0
    [2048, 2048]
    blk.2.attn_v.weight
    Q4_0
    [2048, 256]
    blk.2.ffn_down.weight
    Q4_0
    [5632, 2048]
    blk.2.ffn_gate.weight
    Q4_0
    [2048, 5632]
    blk.2.ffn_norm.weight
    F32
    [2048]
    blk.2.ffn_up.weight
    Q4_0
    [2048, 5632]
    blk.3
    blk.3.attn_k.weight
    Q4_0
    [2048, 256]
    blk.3.attn_norm.weight
    F32
    [2048]
    blk.3.attn_output.weight
    Q4_0
    [2048, 2048]
    blk.3.attn_q.weight
    Q4_0
    [2048, 2048]
    blk.3.attn_v.weight
    Q4_0
    [2048, 256]
    blk.3.ffn_down.weight
    Q4_0
    [5632, 2048]
    blk.3.ffn_gate.weight
    Q4_0
    [2048, 5632]
    blk.3.ffn_norm.weight
    F32
    [2048]
    blk.3.ffn_up.weight
    Q4_0
    [2048, 5632]
    blk.4
    blk.4.attn_k.weight
    Q4_0
    [2048, 256]
    blk.4.attn_norm.weight
    F32
    [2048]
    blk.4.attn_output.weight
    Q4_0
    [2048, 2048]
    blk.4.attn_q.weight
    Q4_0
    [2048, 2048]
    blk.4.attn_v.weight
    Q4_0
    [2048, 256]
    blk.4.ffn_down.weight
    Q4_0
    [5632, 2048]
    blk.4.ffn_gate.weight
    Q4_0
    [2048, 5632]
    blk.4.ffn_norm.weight
    F32
    [2048]
    blk.4.ffn_up.weight
    Q4_0
    [2048, 5632]
    blk.5
    blk.5.attn_k.weight
    Q4_0
    [2048, 256]
    blk.5.attn_norm.weight
    F32
    [2048]
    blk.5.attn_output.weight
    Q4_0
    [2048, 2048]
    blk.5.attn_q.weight
    Q4_0
    [2048, 2048]
    blk.5.attn_v.weight
    Q4_0
    [2048, 256]
    blk.5.ffn_down.weight
    Q4_0
    [5632, 2048]
    blk.5.ffn_gate.weight
    Q4_0
    [2048, 5632]
    blk.5.ffn_norm.weight
    F32
    [2048]
    blk.5.ffn_up.weight
    Q4_0
    [2048, 5632]
    blk.6
    blk.6.attn_k.weight
    Q4_0
    [2048, 256]
    blk.6.attn_norm.weight
    F32
    [2048]
    blk.6.attn_output.weight
    Q4_0
    [2048, 2048]
    blk.6.attn_q.weight
    Q4_0
    [2048, 2048]
    blk.6.attn_v.weight
    Q4_0
    [2048, 256]
    blk.6.ffn_down.weight
    Q4_0
    [5632, 2048]
    blk.6.ffn_gate.weight
    Q4_0
    [2048, 5632]
    blk.6.ffn_norm.weight
    F32
    [2048]
    blk.6.ffn_up.weight
    Q4_0
    [2048, 5632]
    blk.7
    blk.7.attn_k.weight
    Q4_0
    [2048, 256]
    blk.7.attn_norm.weight
    F32
    [2048]
    blk.7.attn_output.weight
    Q4_0
    [2048, 2048]
    blk.7.attn_q.weight
    Q4_0
    [2048, 2048]
    blk.7.attn_v.weight
    Q4_0
    [2048, 256]
    blk.7.ffn_down.weight
    Q4_0
    [5632, 2048]
    blk.7.ffn_gate.weight
    Q4_0
    [2048, 5632]
    blk.7.ffn_norm.weight
    F32
    [2048]
    blk.7.ffn_up.weight
    Q4_0
    [2048, 5632]
    blk.8
    blk.8.attn_k.weight
    Q4_0
    [2048, 256]
    blk.8.attn_norm.weight
    F32
    [2048]
    blk.8.attn_output.weight
    Q4_0
    [2048, 2048]
    blk.8.attn_q.weight
    Q4_0
    [2048, 2048]
    blk.8.attn_v.weight
    Q4_0
    [2048, 256]
    blk.8.ffn_down.weight
    Q4_0
    [5632, 2048]
    blk.8.ffn_gate.weight
    Q4_0
    [2048, 5632]
    blk.8.ffn_norm.weight
    F32
    [2048]
    blk.8.ffn_up.weight
    Q4_0
    [2048, 5632]
    blk.9
    blk.9.attn_k.weight
    Q4_0
    [2048, 256]
    blk.9.attn_norm.weight
    F32
    [2048]
    blk.9.attn_output.weight
    Q4_0
    [2048, 2048]
    blk.9.attn_q.weight
    Q4_0
    [2048, 2048]
    blk.9.attn_v.weight
    Q4_0
    [2048, 256]
    blk.9.ffn_down.weight
    Q4_0
    [5632, 2048]
    blk.9.ffn_gate.weight
    Q4_0
    [2048, 5632]
    blk.9.ffn_norm.weight
    F32
    [2048]
    blk.9.ffn_up.weight
    Q4_0
    [2048, 5632]
    blk.10
    blk.10.attn_k.weight
    Q4_0
    [2048, 256]
    blk.10.attn_norm.weight
    F32
    [2048]
    blk.10.attn_output.weight
    Q4_0
    [2048, 2048]
    blk.10.attn_q.weight
    Q4_0
    [2048, 2048]
    blk.10.attn_v.weight
    Q4_0
    [2048, 256]
    blk.10.ffn_down.weight
    Q4_0
    [5632, 2048]
    blk.10.ffn_gate.weight
    Q4_0
    [2048, 5632]
    blk.10.ffn_norm.weight
    F32
    [2048]
    blk.10.ffn_up.weight
    Q4_0
    [2048, 5632]
    blk.11
    blk.11.attn_k.weight
    Q4_0
    [2048, 256]
    blk.11.attn_norm.weight
    F32
    [2048]
    blk.11.attn_output.weight
    Q4_0
    [2048, 2048]
    blk.11.attn_q.weight
    Q4_0
    [2048, 2048]
    blk.11.attn_v.weight
    Q4_0
    [2048, 256]
    blk.11.ffn_down.weight
    Q4_0
    [5632, 2048]
    blk.11.ffn_gate.weight
    Q4_0
    [2048, 5632]
    blk.11.ffn_norm.weight
    F32
    [2048]
    blk.11.ffn_up.weight
    Q4_0
    [2048, 5632]
    blk.12
    blk.12.attn_k.weight
    Q4_0
    [2048, 256]
    blk.12.attn_norm.weight
    F32
    [2048]
    blk.12.attn_output.weight
    Q4_0
    [2048, 2048]
    blk.12.attn_q.weight
    Q4_0
    [2048, 2048]
    blk.12.attn_v.weight
    Q4_0
    [2048, 256]
    blk.12.ffn_down.weight
    Q4_0
    [5632, 2048]
    blk.12.ffn_gate.weight
    Q4_0
    [2048, 5632]
    blk.12.ffn_norm.weight
    F32
    [2048]
    blk.12.ffn_up.weight
    Q4_0
    [2048, 5632]
    blk.13
    blk.13.attn_k.weight
    Q4_0
    [2048, 256]
    blk.13.attn_norm.weight
    F32
    [2048]
    blk.13.attn_output.weight
    Q4_0
    [2048, 2048]
    blk.13.attn_q.weight
    Q4_0
    [2048, 2048]
    blk.13.attn_v.weight
    Q4_0
    [2048, 256]
    blk.13.ffn_down.weight
    Q4_0
    [5632, 2048]
    blk.13.ffn_gate.weight
    Q4_0
    [2048, 5632]
    blk.13.ffn_norm.weight
    F32
    [2048]
    blk.13.ffn_up.weight
    Q4_0
    [2048, 5632]
    blk.14
    blk.14.attn_k.weight
    Q4_0
    [2048, 256]
    blk.14.attn_norm.weight
    F32
    [2048]
    blk.14.attn_output.weight
    Q4_0
    [2048, 2048]
    blk.14.attn_q.weight
    Q4_0
    [2048, 2048]
    blk.14.attn_v.weight
    Q4_0
    [2048, 256]
    blk.14.ffn_down.weight
    Q4_0
    [5632, 2048]
    blk.14.ffn_gate.weight
    Q4_0
    [2048, 5632]
    blk.14.ffn_norm.weight
    F32
    [2048]
    blk.14.ffn_up.weight
    Q4_0
    [2048, 5632]
    blk.15
    blk.15.attn_k.weight
    Q4_0
    [2048, 256]
    blk.15.attn_norm.weight
    F32
    [2048]
    blk.15.attn_output.weight
    Q4_0
    [2048, 2048]
    blk.15.attn_q.weight
    Q4_0
    [2048, 2048]
    blk.15.attn_v.weight
    Q4_0
    [2048, 256]
    blk.15.ffn_down.weight
    Q4_0
    [5632, 2048]
    blk.15.ffn_gate.weight
    Q4_0
    [2048, 5632]
    blk.15.ffn_norm.weight
    F32
    [2048]
    blk.15.ffn_up.weight
    Q4_0
    [2048, 5632]
    blk.16
    blk.16.attn_k.weight
    Q4_0
    [2048, 256]
    blk.16.attn_norm.weight
    F32
    [2048]
    blk.16.attn_output.weight
    Q4_0
    [2048, 2048]
    blk.16.attn_q.weight
    Q4_0
    [2048, 2048]
    blk.16.attn_v.weight
    Q4_0
    [2048, 256]
    blk.16.ffn_down.weight
    Q4_0
    [5632, 2048]
    blk.16.ffn_gate.weight
    Q4_0
    [2048, 5632]
    blk.16.ffn_norm.weight
    F32
    [2048]
    blk.16.ffn_up.weight
    Q4_0
    [2048, 5632]
    blk.17
    blk.17.attn_k.weight
    Q4_0
    [2048, 256]
    blk.17.attn_norm.weight
    F32
    [2048]
    blk.17.attn_output.weight
    Q4_0
    [2048, 2048]
    blk.17.attn_q.weight
    Q4_0
    [2048, 2048]
    blk.17.attn_v.weight
    Q4_0
    [2048, 256]
    blk.17.ffn_down.weight
    Q4_0
    [5632, 2048]
    blk.17.ffn_gate.weight
    Q4_0
    [2048, 5632]
    blk.17.ffn_norm.weight
    F32
    [2048]
    blk.17.ffn_up.weight
    Q4_0
    [2048, 5632]
    blk.18
    blk.18.attn_k.weight
    Q4_0
    [2048, 256]
    blk.18.attn_norm.weight
    F32
    [2048]
    blk.18.attn_output.weight
    Q4_0
    [2048, 2048]
    blk.18.attn_q.weight
    Q4_0
    [2048, 2048]
    blk.18.attn_v.weight
    Q4_0
    [2048, 256]
    blk.18.ffn_down.weight
    Q4_0
    [5632, 2048]
    blk.18.ffn_gate.weight
    Q4_0
    [2048, 5632]
    blk.18.ffn_norm.weight
    F32
    [2048]
    blk.18.ffn_up.weight
    Q4_0
    [2048, 5632]
    blk.19
    blk.19.attn_k.weight
    Q4_0
    [2048, 256]
    blk.19.attn_norm.weight
    F32
    [2048]
    blk.19.attn_output.weight
    Q4_0
    [2048, 2048]
    blk.19.attn_q.weight
    Q4_0
    [2048, 2048]
    blk.19.attn_v.weight
    Q4_0
    [2048, 256]
    blk.19.ffn_down.weight
    Q4_0
    [5632, 2048]
    blk.19.ffn_gate.weight
    Q4_0
    [2048, 5632]
    blk.19.ffn_norm.weight
    F32
    [2048]
    blk.19.ffn_up.weight
    Q4_0
    [2048, 5632]
    blk.20
    blk.20.attn_k.weight
    Q4_0
    [2048, 256]
    blk.20.attn_norm.weight
    F32
    [2048]
    blk.20.attn_output.weight
    Q4_0
    [2048, 2048]
    blk.20.attn_q.weight
    Q4_0
    [2048, 2048]
    blk.20.attn_v.weight
    Q4_0
    [2048, 256]
    blk.20.ffn_down.weight
    Q4_0
    [5632, 2048]
    blk.20.ffn_gate.weight
    Q4_0
    [2048, 5632]
    blk.20.ffn_norm.weight
    F32
    [2048]
    blk.20.ffn_up.weight
    Q4_0
    [2048, 5632]
    blk.21
    blk.21.attn_k.weight
    Q4_0
    [2048, 256]
    blk.21.attn_norm.weight
    F32
    [2048]
    blk.21.attn_output.weight
    Q4_0
    [2048, 2048]
    blk.21.attn_q.weight
    Q4_0
    [2048, 2048]
    blk.21.attn_v.weight
    Q4_0
    [2048, 256]
    blk.21.ffn_down.weight
    Q4_0
    [5632, 2048]
    blk.21.ffn_gate.weight
    Q4_0
    [2048, 5632]
    blk.21.ffn_norm.weight
    F32
    [2048]
    blk.21.ffn_up.weight
    Q4_0
    [2048, 5632]
    output.weight
    Q6_K
    [2048, 32000]
    output_norm.weight
    F32
    [2048]


```