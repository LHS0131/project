<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
      <title>Subrootin Test</title>
      <!-- 합쳐지고 최소화된 최신 CSS -->
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
        <!-- 부가적인 테마 -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
          <!-- 합쳐지고 최소화된 최신 자바스크립트 -->
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
          <!--jquery -->
          <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
        </head>
        <style>
          .lineArea {
            border: 1px solid gray;
          }
          .headerLine {
            height: 10%;
          }
          .ContextLine {
            height: 80%;
            vertical-align: middle;
          }
          .footer {
            height: 10%;
          }
          .middleArea{

          }


        </style>
        <script src="../angular.js"></script>
        <body>
          <div class="wrapper">
            <div class="lineArea headerLine">
              <h2 style="text-align:center">Top Banner</h2>
            </div>
            <div class="middleArea">
        <div class="lineArea ContextLine">
                <h2 style="text-align:center">Contents
                </h2>
              </div>  
              <aside class="lineArea">
                사이드바
              </aside>
            </div>
            <div class="lineArea footer">
              <h2 class="text-primary" style="text-align:center;">footer Area</h2>
            </div>
          </div>
        </body>
      </html>
