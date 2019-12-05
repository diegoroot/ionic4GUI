<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');
header('Content-Type: application/json; charset=UTF-8');
include "config.php";
$postjson = json_decode(file_get_contents('php://input'), true);
$today = date('Y-m-d');

if($postjson['aksi'] == "add_register") {
    $password = md5($postjson['password']);
    $query = mysqli_query($mysqli, "INSERT INTO profesor SET 
    prof_nombre = '$postjson[nombre_prof]',
    prof_apellidos = '$postjson[apellidos_prof]',
    prof_codigo = '$postjson[codigo_prof]',
    prof_password = '$postjson[password_prof]',
    prof_correo = '$postjson[correo_prof]',
    prof_telefono = '$postjson[telefono_prof]',
    prof_id_usu = $postjson[id_usu_prof],
    prof_id_mat = $postjson[id_mat_prof],
    timestampp    = '$today'
  ");
  if($query) $result = json_encode(array('success' =>true));
  else $result = json_encode(array('success' => false, 'msg'=>'error , please try again'));
  echo $result;
}

elseif($postjson['aksi'] == "add_registersalas") {
  $query = mysqli_query($mysqli, "INSERT INTO sala SET 
  sal_nombre = '$postjson[sal_nombre]',
  sal_id = $postjson[sal_id],
  sal_ubicacion = '$postjson[sal_ubicacion]',
  sal_estado = '$postjson[sal_estado]',
  sal_num_equ = '$postjson[sal_num_equ]',
  timestampp	    = '$today'
");
if($query) $result = json_encode(array('success' =>true));
else $result = json_encode(array('success' => false, 'msg'=>'error , please try again'));
echo $result;
}

elseif($postjson['aksi'] == "add_registerreservas") {
  $query = mysqli_query($mysqli, "INSERT INTO reserva SET
  res_num = '$postjson[res_num]',
  res_hora_ini = '$postjson[res_hora_ini]',
  res_hora_fin = '$postjson[res_hora_fin]',
  res_id_sal = '$postjson[res_id_sal]',
  res_fecha = '$postjson[res_fecha]',
  res_id_prof= $postjson[res_id_prof],
  timestampp = '$today'
");
if($query) $result = json_encode(array('success' =>true));
else $result = json_encode(array('success' => false, 'msg'=>'error , please try again'));
echo $result;
}

elseif($postjson['aksi'] == "correo") {
  $query = mysqli_query($mysqli, "SELECT * FROM profesor WHERE prof_correo='$postjson[email]' 
");
$check = mysqli_num_rows($query);
if($check>0){
  $data = mysqli_fetch_array($query);
  $datauser = array(
     //nombre-cod-correo-contraseña
    'nombre' => $data['prof_nombre'],
    'apellidos' => $data['prof_apellidos'],
    'correo' => $data['prof_correo'],
    'id' =>$data['prof_id']
  );
if($query) $result = json_encode(array('success' =>true, 'result'=>$datauser));
else $result = json_encode(array('success' => false, 'msg'=>'error, please try again'));
}else{
  $result = json_encode(array('success' => false, 'msg'=>'no exite el correo'));
}
echo $result;
}





elseif($postjson['aksi'] == "login") {
  $query = mysqli_query($mysqli, "SELECT * FROM profesor WHERE prof_correo='$postjson[username]' AND prof_password='$postjson[password]' 
");
$check = mysqli_num_rows($query);
if($check>0){
  $data = mysqli_fetch_array($query);
  $datauser = array(
     //nombre-cod-correo-contraseña
    'nombre' => $data['prof_nombre'],
    'apellidos' => $data['prof_apellidos'],
    'correo' => $data['prof_correo'],
    'id' =>$data['prof_id']
  );
if($query) $result = json_encode(array('success' =>true, 'result'=>$datauser));
else $result = json_encode(array('success' => false, 'msg'=>'error, please try again'));
}else{
  $result = json_encode(array('success' => false, 'msg'=>'unregister account'));
}
echo $result;
}

elseif($postjson['aksi']=='getdatasalas'){
  $data = array();
  $query = mysqli_query($mysqli, "SELECT * FROM sala ORDER BY sal_id DESC");
  while($row = mysqli_fetch_array($query)){
      $data[] = array(
          'sal_nombre' => $row['sal_nombre'],
          'sal_id' => $row['sal_id'],
          'sal_ubicacion' => $row['sal_ubicacion'],
          'sal_estado' => $row['sal_estado'],
          'sal_num_equ' => $row['sal_num_equ'],
          'timestampp' => $row['timestampp']
      );
  }
  if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
  else $result = json_encode(array('success'=>false)); 
  echo $result;
}

elseif($postjson['aksi']=='getmisdatareservas'){
  $data = array();
  $query = mysqli_query($mysqli, "SELECT profesor.prof_nombre, reserva.res_hora_ini, reserva.res_hora_fin, sala.sal_nombre, 
  reserva.timestampp, reserva.res_id FROM reserva INNER JOIN profesor INNER JOIN sala ON reserva.res_id_prof = profesor.prof_id and 
  sala.sal_id = reserva.res_id_sal and reserva.res_id_prof=$postjson[id]");
  while($row = mysqli_fetch_array($query)){
      $data[] = array(
          'prof_nombre' => $row['prof_nombre'],
          'res_hora_ini' => $row['res_hora_ini'],
          'res_hora_fin' => $row['res_hora_fin'],
          'sal_nombre' => $row['sal_nombre'],
          'timestampp' => $row['timestampp'],
          'res_id' => $row['res_id']
      );
  }
  if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
  else $result = json_encode(array('success'=>false)); 
  echo $result;
}

elseif($postjson['aksi']=='getdatareservas'){
  $data = array();
  $query = mysqli_query($mysqli, "SELECT profesor.prof_nombre, reserva.res_hora_ini, reserva.res_hora_fin, sala.sal_nombre,
   reserva.timestampp FROM reserva INNER JOIN profesor INNER JOIN sala ON reserva.res_id_prof = profesor.prof_id and 
   sala.sal_id = reserva.res_id_sal");
  while($row = mysqli_fetch_array($query)){
      $data[] = array(
          'prof_nombre' => $row['prof_nombre'],
          'res_hora_ini' => $row['res_hora_ini'],
          'res_hora_fin' => $row['res_hora_fin'],
          'sal_nombre' => $row['sal_nombre'],
          'timestampp' => $row['timestampp']
      );
  }
  if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
  else $result = json_encode(array('success'=>false)); 
  echo $result;
}

if($postjson['aksi']=='add'){
    $query = mysqli_query($mysqli, "INSERT INTO profesor SET
    prof_nombre = '$postjson[nombre_prof]',
    prof_id = '$postjson[id_prof]',
    prof_apellidos = '$postjson[apellidos_prof]',
    prof_codigo = '$postjson[codigo_prof]',
    prof_password = '$postjson[password_prof]',
    prof_correo = '$postjson[correo_prof]',
    prof_telefono = '$postjson[telefono_prof]',
    prof_id_usu = '$postjson[id_usuprof]',
    prof_id_mat = '$postjson[id_mat_prof]',
    prof_id_res = '$postjson[id_res_prof]',
    timestampp    = '$today'
");
   $idcust = mysqli_insert_id($mysqli);
   if($query) $result = json_encode(array('success'=>true, 'customerid'=>$idcust));
   else $result = json_encode(array('success'=>false));
   echo $result;
}

elseif($postjson['aksi']=='getdata'){
    $data = array();
    $query = mysqli_query($mysqli, "SELECT * FROM profesor ORDER BY prof_id DESC");
    while($row = mysqli_fetch_array($query)){
        $data[] = array(
            'prof_nombre' => $row['prof_nombre'],
            'prof_id' => $row['prof_id'],
            'prof_apellidos' => $row['prof_apellidos'],
            'prof_codigo' => $row['prof_codigo'],
            'prof_password' => $row['prof_password'],
            'prof_correo' => $row['prof_correo'],
            'prof_telefono' => $row['prof_telefono'],
            'prof_id_usu' => $row['prof_id_usu'],
            'prof_id_mat' => $row['prof_id_mat'],
            'prof_id_res' => $row['prof_id_res'],
            'timestampp' => $row['timestampp'],
        );
    }
    if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
    else $result = json_encode(array('success'=>false));   
    echo $result;
}

elseif($postjson['aksi']=='update'){
    $query = mysqli_query($mysqli, "UPDATE profesor SET 
        prof_nombre = '$postjson[nombre_prof]',
        prof_id = '$postjson[id_prof]',
        prof_apellidos = '$postjson[apellidos_prof]',
        prof_codigo = '$postjson[codigo_prof]',
        prof_password = '$postjson[password_prof]',
        prof_correo = '$postjson[correo_prof]',
        prof_telefono = '$postjson[telefono_prof]',
        prof_id_usu = '$postjson[id_usuprof]',
        prof_id_mat = '$postjson[id_mat_prof]',
        prof_id_res = '$postjson[id_res_prof]',
        timestampp    = '$today' WHERE prof_id='$postjson[id_prof]'
        ");
    if($query) $result = json_encode(array('success'=>true, 'result'=>'success'));
    else $result = json_encode(array('success'=>false, 'result'=>'error'));   
    echo $result;
}

elseif($postjson['aksi']=='updatesala'){
  $query = mysqli_query($mysqli, "UPDATE sala SET 
  sal_nombre = '$postjson[sal_nombre]',
  sal_ubicacion = '$postjson[sal_ubicacion]',
  sal_estado = '$postjson[sal_estado]',
  sal_num_equ = '$postjson[sal_num_equ]',
  timestampp	    = '$today' where sal_id = $postjson[sal_id]
      ");
  if($query) $result = json_encode(array('success'=>true, 'result'=>'success'));
  else $result = json_encode(array('success'=>false, 'result'=>'error')); 
  echo $result;
}

elseif($postjson['aksi']=='delete'){
    $query = mysqli_query($mysqli, "DELETE FROM profesor WHERE prof_id='$postjson[id_prof]'
        ");
    if($query) $result = json_encode(array('success'=>true, 'result'=>'success'));
    else $result = json_encode(array('success'=>false, 'result'=>'error'));   
    echo $result;
}

elseif($postjson['aksi']=='deletesala'){
  $query = mysqli_query($mysqli, "DELETE FROM sala WHERE sal_id=$postjson[sal_id]
      ");
  if($query) $result = json_encode(array('success'=>true, 'result'=>'success'));
  else $result = json_encode(array('success'=>false, 'result'=>'error'));
  echo $result; 
}

elseif($postjson['aksi']=='deletereserva'){
  $query = mysqli_query($mysqli, "DELETE FROM reserva WHERE res_id=$postjson[res_id]
      ");
  if($query) $result = json_encode(array('success'=>true, 'result'=>'success'));
  else $result = json_encode(array('success'=>false, 'result'=>'error'));
  echo $result;
}
?>