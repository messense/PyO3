window.BENCHMARK_DATA = {
  "lastUpdate": 1622027263259,
  "repoUrl": "https://github.com/messense/pyo3",
  "entries": {
    "bench_pyobject": [
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "distinct": true,
          "id": "0f249dd61315e74a97f052d90f532a388f051835",
          "message": "Add automated continuous benchmarking",
          "timestamp": "2021-05-26T19:01:53+08:00",
          "tree_id": "1aef1933cd529bd002279f658af414586fee2f30",
          "url": "https://github.com/messense/pyo3/commit/0f249dd61315e74a97f052d90f532a388f051835"
        },
        "date": 1622027145183,
        "tool": "cargo",
        "benches": [
          {
            "name": "drop_many_objects",
            "value": 3827,
            "range": "± 148",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "bench_pyclass": [
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "distinct": true,
          "id": "0f249dd61315e74a97f052d90f532a388f051835",
          "message": "Add automated continuous benchmarking",
          "timestamp": "2021-05-26T19:01:53+08:00",
          "tree_id": "1aef1933cd529bd002279f658af414586fee2f30",
          "url": "https://github.com/messense/pyo3/commit/0f249dd61315e74a97f052d90f532a388f051835"
        },
        "date": 1622027171762,
        "tool": "cargo",
        "benches": [
          {
            "name": "first_time_init",
            "value": 5111,
            "range": "± 22545",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "bench_gil": [
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "distinct": true,
          "id": "0f249dd61315e74a97f052d90f532a388f051835",
          "message": "Add automated continuous benchmarking",
          "timestamp": "2021-05-26T19:01:53+08:00",
          "tree_id": "1aef1933cd529bd002279f658af414586fee2f30",
          "url": "https://github.com/messense/pyo3/commit/0f249dd61315e74a97f052d90f532a388f051835"
        },
        "date": 1622027174955,
        "tool": "cargo",
        "benches": [
          {
            "name": "clean_gilpool_new",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 112,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 114,
            "range": "± 3",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "bench_set": [
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "distinct": true,
          "id": "0f249dd61315e74a97f052d90f532a388f051835",
          "message": "Add automated continuous benchmarking",
          "timestamp": "2021-05-26T19:01:53+08:00",
          "tree_id": "1aef1933cd529bd002279f658af414586fee2f30",
          "url": "https://github.com/messense/pyo3/commit/0f249dd61315e74a97f052d90f532a388f051835"
        },
        "date": 1622027176167,
        "tool": "cargo",
        "benches": [
          {
            "name": "iter_set",
            "value": 1773496,
            "range": "± 47136",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7663244,
            "range": "± 212322",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 9846132,
            "range": "± 73447",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4762824,
            "range": "± 144647",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "bench_list": [
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "distinct": true,
          "id": "0f249dd61315e74a97f052d90f532a388f051835",
          "message": "Add automated continuous benchmarking",
          "timestamp": "2021-05-26T19:01:53+08:00",
          "tree_id": "1aef1933cd529bd002279f658af414586fee2f30",
          "url": "https://github.com/messense/pyo3/commit/0f249dd61315e74a97f052d90f532a388f051835"
        },
        "date": 1622027173172,
        "tool": "cargo",
        "benches": [
          {
            "name": "iter_list",
            "value": 2143166,
            "range": "± 96513",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 1007201,
            "range": "± 75266",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "bench_call": [
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "distinct": true,
          "id": "0f249dd61315e74a97f052d90f532a388f051835",
          "message": "Add automated continuous benchmarking",
          "timestamp": "2021-05-26T19:01:53+08:00",
          "tree_id": "1aef1933cd529bd002279f658af414586fee2f30",
          "url": "https://github.com/messense/pyo3/commit/0f249dd61315e74a97f052d90f532a388f051835"
        },
        "date": 1622027185535,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 82261,
            "range": "± 6676",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 255285,
            "range": "± 23525",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "bench_tuple": [
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "distinct": true,
          "id": "0f249dd61315e74a97f052d90f532a388f051835",
          "message": "Add automated continuous benchmarking",
          "timestamp": "2021-05-26T19:01:53+08:00",
          "tree_id": "1aef1933cd529bd002279f658af414586fee2f30",
          "url": "https://github.com/messense/pyo3/commit/0f249dd61315e74a97f052d90f532a388f051835"
        },
        "date": 1622027182861,
        "tool": "cargo",
        "benches": [
          {
            "name": "iter_tuple",
            "value": 1394755,
            "range": "± 21255",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 754333,
            "range": "± 16998",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "bench_dict": [
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "distinct": true,
          "id": "0f249dd61315e74a97f052d90f532a388f051835",
          "message": "Add automated continuous benchmarking",
          "timestamp": "2021-05-26T19:01:53+08:00",
          "tree_id": "1aef1933cd529bd002279f658af414586fee2f30",
          "url": "https://github.com/messense/pyo3/commit/0f249dd61315e74a97f052d90f532a388f051835"
        },
        "date": 1622027246341,
        "tool": "cargo",
        "benches": [
          {
            "name": "iter_dict",
            "value": 2742847,
            "range": "± 204362",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3303157,
            "range": "± 281703",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 10114582,
            "range": "± 1258468",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 12665653,
            "range": "± 937445",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7990606,
            "range": "± 733011",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}