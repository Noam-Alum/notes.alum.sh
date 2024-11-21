# How to create a simple kernel module

> A pieces of code that can be loaded and unloaded into the kernel upon demand.

### Kernel module metadata macaros

| Macro                       | Example                                      | Description                                                                 |
|-----------------------------|----------------------------------------------|-----------------------------------------------------------------------------|
| `MODULE_AUTHOR(name)`       | `MODULE_AUTHOR("Ruan de Bruyn");`            | Specifies the name of the module author.                                    |
| `MODULE_DESCRIPTION(desc)`  | `MODULE_DESCRIPTION("Example module for...");` | Provides a brief description of what the module does.                       |
| `MODULE_LICENSE(license)`   | `MODULE_LICENSE("GPL");`                     | Specifies the licensing terms for the module (e.g., "GPL", "proprietary").   |
| `MODULE_VERSION(version)`   | `MODULE_VERSION("1.0");`                     | Specifies the version number of the module.                                 |
| `MODULE_ALIAS(name)`        | `MODULE_ALIAS("alias_name");`                | Provides an alias that can be used to refer to the module.                  |
| `MODULE_INFO(tag, info)`    | `AMODULE_INFO(foo, "bar");`                   | Adds custom information under a specific tag.                               |

<h1 style="background-color: yellow">NOT DONE</h1>

### Common commands

- **lsmod:** Used to view all loaded kerenl modules.
- **instmod:** Used to load a new kernel module.
- **rmmod:** Used to unload a kernel module.
