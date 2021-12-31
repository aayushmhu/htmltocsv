# htmltocsv

To Install This Plugin Run

composer require aayushmhu/yii2-htmltocsv dev-master

To Use This Extension You Just Need to Write This

For Example:
<code>

<?php>
use \aayushmhu\htmltocsv\ExportButton;

ExportButton::widget([
  'tableid'=>'table_id',
  'filename'=>'Hello',
  'options' => [
    'id'=>\aayushmhu\htmltocsv\ExportButton::DEFAULT_BUTTON,
    'class'=>'btn btn-primary',
  ],
]);

?>
</code>

<table class="table" id="table_id" >
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
