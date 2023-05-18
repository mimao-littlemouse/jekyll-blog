---
index: 0
text: emoji列表
---
{% assign emojis = site.data.emojis -%}
<div id="articles-github-emoji" class="d-flex w-100 h-100 include-container-lazyload-img">
  <div id="github-emoji_group_scrollspy_navbar" class="h-100 bg-body" style="font-size:12px;">
    <nav class="nav nav-pills h-100 d-flex flex-column flex-nowrap border-end scrollbar scrollbar-blue overflow-y-auto" style="width:40px;">
    {% assign emojis_group = "a" -%}
    {% for emoji in emojis -%}
        {% assign emoji_temp = emoji -%}
        {% assign emoji_first_char = emoji | strip | downcase | split: "" | first -%}
        {% case emoji_first_char -%}
            {% when "+", "-" -%}
                {% if emoji_first_char == "+" -%}
                    {% assign emoji_temp = emoji | replace_first: "+", "" -%}
                {% endif -%}
                {% assign emoji_first_char = "char" -%}
            {% when "1", "2", "3", "4", "5", "6", "7", "8", "9", "0" -%}
                {% assign emoji_first_char = "0-9" -%}
        {% endcase -%}
        {% if emoji_first_char != emojis_group -%}
            {% assign emojis_group = emoji_first_char -%}
            <a class="nav-link text-center p-0" style="border-radius:2px;" href="#github-emoji_{{- emoji_temp -}}_{{- emojis_group -}}-group_scrollspy">{{- emojis_group -}}</a>
        {% endif -%}
    {% endfor -%}
    </nav>
  </div>
  <div class="h-100">
    <div data-bs-spy="scroll" data-bs-target="#github-emoji_group_scrollspy_navbar" data-bs-smooth-scroll="true" class="d-flex justify-content-evenly flex-wrap scrollbar scrollbar-blue h-100 overflow-y-auto" tabindex="0"> 
    <!-- 定义 emoji 组名的默认值 -->
    {% assign emojis_group = "a" -%}
    <!-- 遍历 每一个 表情包字符串 -->
    {% for emoji in emojis-%}
        <!-- 处理 emoji字符串 -->
        {% assign emoji_temp = emoji -%}
        {% assign emoji_first_char = emoji | strip | downcase | split: "" | first -%}
        {% case emoji_first_char -%}
            {% when "+", "-" -%}
                {% if emoji_first_char == "+" -%}
                    {% assign emoji_temp = emoji | replace_first: "+", "" -%}
                {% endif -%}
                {% assign emoji_first_char = "char" -%}
            {% when "1", "2", "3", "4", "5", "6", "7", "8", "9", "0" -%}
                {% assign emoji_first_char = "0-9" -%}
        {% endcase -%}
        <!-- 如果 当前 emoji字符串的第一个字符 和 当前组名不同(该组名 其实就是默认值或另一个不同与其他emoji字符串第一个字符) -->
        {% if emoji_first_char != emojis_group -%}
            <!-- 先判断 上一组是否结束，但如果当前的循环是第一个就不算，其他情况都符合，直接在下一个组开始之前将占位符添加到位 -->
            <!-- 每组占位符占位符 -->
            {% if forloop.index0 != 0 -%}
                <span class="d-block flex-grow-1" style="width:200px;max-width:430px;"></span>
                <span class="d-none d-md-block flex-grow-1" style="width:200px;max-width:430px;"></span>
                <span class="d-none d-lg-block flex-grow-1" style="width:200px;max-width:430px;"></span>
                <span class="d-none d-lg-block flex-grow-1" style="width:200px;max-width:430px;"></span>
                <span class="d-none d-xl-block flex-grow-1" style="width:200px;max-width:430px;"></span>
                <span class="d-none d-xxl-block flex-grow-1" style="width:200px;max-width:430px;"></span>
                <span class="d-none d-xxl-block flex-grow-1" style="width:200px;max-width:430px;"></span>
                <span class="d-none d-xxl-block flex-grow-1" style="width:200px;max-width:430px;"></span>
                <span class="d-none d-xxl-block flex-grow-1" style="width:200px;max-width:430px;"></span>
                <span class="d-none d-xxl-block flex-grow-1" style="width:200px;max-width:430px;"></span>
            {% endif -%}
            <!-- 当 得到新组名的时候，将组名存起来，以便下一个 emoji字符串第一个字符的 对比（即：方便上面的检查） -->
            {% assign emojis_group = emoji_first_char -%}
            <div class="w-100 bg-body-tertiary ms-2 border-bottom fs-5 fw-bold" style="height:30px;line-height:30px;font-weight:bloder;" id="github-emoji_{{- emoji_temp -}}_{{- emojis_group -}}-group_scrollspy">
                {{- emojis_group -}}
            </div>
        {% endif -%}
        <div class="card my-1 flex-grow-1" style="width:200px;max-width:430px;height:50px;max-height:60px;">
            <a class="row g-0 d-flex justify-content-between align-items-center text-decoration-none" style="height:30px;" data-bs-toggle="collapse" href="#github-emoji_{{- emoji_temp -}}-card-description_collapse" role="button" aria-expanded="false" aria-controls="github-emoji_{{- emoji_temp -}}-card-description_collapse">
                <div class="col-8 text-truncate p-0 ps-2">
                    :{{- emoji -}}:
                </div>
                <div class="col-4 p-0 pe-2 d-flex justify-content-end align-items-center" style="height:25px;">
                    <span style="font-size:22px;" aria-hidden="true">&raquo;</span>
                </div>
            </a>
            <div class="collapse px-1 align-middle text-truncate user-select-all border-bottom" style="height:20px;border-radius:3px;font-size:12px;" id="github-emoji_{{- emoji_temp -}}-card-description_collapse">
                {{- emoji -}}
            </div>
        </div>
    {% endfor -%}
    </div>
  </div>
</div>

